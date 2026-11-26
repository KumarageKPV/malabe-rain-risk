(() => {
  "use strict";

  const config = RAIN_CONFIG;
  const maxTrials = 20_000;
  const batchSize = 100;
  const batchDelay = 36;
  const number = new Intl.NumberFormat("en");
  const percent = new Intl.NumberFormat("en", { style: "percent", minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const byId = (id) => document.getElementById(id);
  const monthInput = byId("month");
  const startInput = byId("start-hour");
  const durationInput = byId("duration");
  const thresholdInput = byId("threshold");
  const startButton = byId("start");
  const pauseButton = byId("pause");
  const resetButton = byId("reset");
  const chart = byId("risk-chart");
  const context = chart.getContext("2d");
  let selectedScenario;
  let fittedRisk;
  let timer = null;
  let trials = 0;
  let exposed = 0;
  const history = [];

  const timeLabel = (hour) => String(hour).padStart(2, "0") + ":00";
  const durationLabel = (hours) => hours + (hours === 1 ? " hour" : " hours");
  const thresholdLabel = (threshold) => Number(threshold).toFixed(1) + " mm";

  function parametersFor(scenario, month) {
    return config.parameters[scenario.threshold][month];
  }

  function exactExposure(scenario, month) {
    const hours = parametersFor(scenario, month);
    let allDry = 1 - hours[scenario.startHour].initialWet;
    for (let offset = 1; offset < scenario.durationHours; offset++) {
      allDry *= 1 - hours[scenario.startHour + offset].wetAfterDry;
    }
    return 1 - allDry;
  }

  function exactForSelection(scenario) {
    if (scenario.month !== "season") return exactExposure(scenario, scenario.month);
    return Object.entries(config.monthWeights).reduce(
      (total, [month, weight]) => total + weight * exactExposure(scenario, month),
      0
    );
  }

  function simulateEvent(scenario) {
    let month = scenario.month;
    if (month === "season") {
      month = Math.random() < config.monthWeights["10"] ? "10" : "11";
    }
    const hours = parametersFor(scenario, month);
    let wet = Math.random() < hours[scenario.startHour].initialWet;
    let eventExposed = wet;
    for (let offset = 1; offset < scenario.durationHours; offset++) {
      const hour = hours[scenario.startHour + offset];
      wet = Math.random() < (wet ? hour.wetAfterWet : hour.wetAfterDry);
      eventExposed = eventExposed || wet;
    }
    return Number(eventExposed);
  }

  function wilson(successes, count) {
    const p = successes / count;
    const z = 1.959964;
    const zSquared = z ** 2;
    const denominator = 1 + zSquared / count;
    const centre = (p + zSquared / (2 * count)) / denominator;
    const halfWidth = z * Math.sqrt(p * (1 - p) / count + zSquared / (4 * count ** 2)) / denominator;
    return [Math.max(0, centre - halfWidth), Math.min(1, centre + halfWidth)];
  }

  function setStatus(label, state) {
    const status = byId("status");
    status.textContent = label;
    status.dataset.state = state;
    const running = state === "running";
    startButton.disabled = running || trials === maxTrials;
    pauseButton.disabled = !running;
    resetButton.disabled = trials === 0 && !running;
  }

  function renderResults() {
    const latest = history.at(-1);
    byId("trials").textContent = number.format(trials);
    byId("estimate").textContent = latest ? percent.format(latest.estimate) : "—";
    byId("interval").textContent = latest ? latest.interval.map((value) => percent.format(value)).join("–") : "—";
    byId("chart-empty").hidden = trials > 0;
    drawChart();
  }

  function drawChart() {
    const width = chart.clientWidth;
    const height = chart.clientHeight;
    if (!width || !height) return;

    const scale = window.devicePixelRatio || 1;
    const pixelWidth = Math.round(width * scale);
    const pixelHeight = Math.round(height * scale);
    if (chart.width !== pixelWidth) chart.width = pixelWidth;
    if (chart.height !== pixelHeight) chart.height = pixelHeight;
    context.setTransform(scale, 0, 0, scale, 0, 0);
    context.clearRect(0, 0, width, height);

    const left = 45;
    const top = 12;
    const right = width - 20;
    const bottom = height - 42;
    const x = (count) => left + count / maxTrials * (right - left);
    const y = (probability) => bottom - probability * (bottom - top);

    context.font = "11px Segoe UI, sans-serif";
    context.fillStyle = "#aec1ca";
    context.strokeStyle = "#30424d";
    context.textBaseline = "middle";
    for (const risk of [0, .25, .5, .75, 1]) {
      context.beginPath();
      context.moveTo(left, y(risk));
      context.lineTo(right, y(risk));
      context.stroke();
      context.textAlign = "right";
      context.fillText(Math.round(risk * 100) + "%", left - 8, y(risk));
    }

    context.textAlign = "center";
    for (const count of [0, 5_000, 10_000, 15_000, maxTrials]) {
      context.fillText(count ? count / 1000 + "k" : "0", x(count), bottom + 13);
    }
    context.fillText("Simulated events", (left + right) / 2, bottom + 29);

    context.save();
    context.beginPath();
    context.rect(left, top, right - left, bottom - top);
    context.clip();
    context.beginPath();
    context.strokeStyle = "#f4c481";
    context.setLineDash([6, 5]);
    context.moveTo(left, y(fittedRisk));
    context.lineTo(right, y(fittedRisk));
    context.stroke();
    context.restore();

    if (!history.length) return;
    context.fillStyle = "rgba(115, 235, 215, .25)";
    context.beginPath();
    context.moveTo(x(history[0].trials), y(history[0].interval[0]));
    for (const point of history) context.lineTo(x(point.trials), y(point.interval[0]));
    for (let index = history.length - 1; index >= 0; index--) {
      const point = history[index];
      context.lineTo(x(point.trials), y(point.interval[1]));
    }
    context.closePath();
    context.fill();

    context.beginPath();
    context.moveTo(x(history[0].trials), y(history[0].estimate));
    for (const point of history) context.lineTo(x(point.trials), y(point.estimate));
    context.strokeStyle = "#73ebd7";
    context.lineWidth = 2;
    context.stroke();
    const latest = history.at(-1);
    context.beginPath();
    context.arc(x(latest.trials), y(latest.estimate), 3, 0, Math.PI * 2);
    context.fillStyle = "#73ebd7";
    context.fill();
  }

  function cancelBatch() {
    clearTimeout(timer);
    timer = null;
  }

  function resetRun() {
    cancelBatch();
    trials = 0;
    exposed = 0;
    history.length = 0;
    setStatus("Ready", "ready");
    renderResults();
  }

  function runBatch() {
    timer = null;
    const batchEnd = Math.min(trials + batchSize, maxTrials);
    while (trials < batchEnd) {
      exposed += simulateEvent(selectedScenario);
      trials++;
    }
    history.push({ trials, estimate: exposed / trials, interval: wilson(exposed, trials) });
    renderResults();
    if (trials === maxTrials) {
      setStatus("Complete", "complete");
    } else {
      timer = setTimeout(runBatch, batchDelay);
    }
  }

  function readSettings() {
    selectedScenario = {
      month: monthInput.value,
      startHour: Number(startInput.value),
      durationHours: Number(durationInput.value),
      threshold: thresholdInput.value
    };
    fittedRisk = exactForSelection(selectedScenario);
    const baselineRisk = exactForSelection({ ...selectedScenario, startHour: config.baselineStart });
    const difference = 100 * (fittedRisk - baselineRisk);
    byId("selected-time").textContent = timeLabel(selectedScenario.startHour) + " selected";
    byId("selected-risk").textContent = percent.format(fittedRisk);
    byId("baseline-risk").textContent = percent.format(baselineRisk);
    byId("risk-difference").textContent = Math.abs(difference) < .05
      ? "Difference under 0.1 percentage points"
      : Math.abs(difference).toFixed(1) + " percentage points " + (difference < 0 ? "lower" : "higher");
    resetRun();
  }

  function renderReference() {
    const reference = config.reference;
    const browserRisk = exactExposure(reference, reference.month);
    const difference = Math.abs(browserRisk - reference.probability);
    const passed = difference <= reference.absoluteTolerance;
    byId("reference-scenario").textContent = [
      config.months[reference.month], timeLabel(reference.startHour), durationLabel(reference.durationHours),
      thresholdLabel(reference.threshold)
    ].join(" · ");
    byId("notebook-exact").textContent = String(reference.probability);
    byId("browser-exact").textContent = String(browserRisk);
    byId("absolute-difference").textContent = difference === 0 ? "0" : difference.toExponential(6);
    byId("tolerance").textContent = reference.absoluteTolerance.toExponential();
    const checkStatus = byId("check-status");
    checkStatus.textContent = passed ? "PASS" : "FAIL";
    checkStatus.dataset.state = passed ? "pass" : "fail";
  }

  function setOptions(select, options, value) {
    for (const [key, label] of options) select.add(new Option(label, key));
    select.value = value;
    select.addEventListener("change", readSettings);
  }

  setOptions(monthInput, [["season", "October + November"], ...Object.entries(config.months)], config.defaults.month);
  setOptions(startInput, config.startHours.map((hour) => [hour, timeLabel(hour)]), config.defaults.startHour);
  setOptions(durationInput, config.durations.map((hours) => [hours, durationLabel(hours)]), config.defaults.durationHours);
  setOptions(thresholdInput, config.thresholds.map((threshold) => [threshold, thresholdLabel(threshold)]), config.defaults.threshold);

  startButton.addEventListener("click", () => {
    if (timer !== null || trials === maxTrials) return;
    setStatus("Running", "running");
    runBatch();
  });
  pauseButton.addEventListener("click", () => {
    cancelBatch();
    setStatus("Paused", "paused");
  });
  resetButton.addEventListener("click", resetRun);
  new ResizeObserver(drawChart).observe(chart);
  readSettings();
  renderReference();
})();
