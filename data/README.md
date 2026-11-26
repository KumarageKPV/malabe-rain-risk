# Malabe ERA5 precipitation data

The query location is the [Malabe town point](https://www.openstreetmap.org/node/3274475234) at **6.90407° N, 79.95462° E**. Open-Meteo returned the ERA5 grid centre at **7.0° N, 80.0° E** for all ten requests. The location is the same for every year.

| File | Contents |
|---|---|
| `malabe_era5_hourly_utc.csv` | 15,120 rows of hourly precipitation. `time_utc` is the UTC end of the preceding one-hour accumulation. `precip_mm` is the precipitation total in millimetres. |
| `data_queries.csv` | Exact query URL, requested coordinates, returned grid centre, UTC retrieval time, row count, and missing-total count for each year. |

The snapshot was retrieved on **26 November 2026**. Each 2016–2025 request uses the [Open-Meteo Historical Weather API](https://open-meteo.com/en/docs/historical-weather-api) with `models=era5`, `hourly=precipitation`, `timezone=GMT`, and dates from **30 September to 1 December**, inclusive. The extra dates supply the adjacent UTC bins needed at the local month boundaries. Each request returned 1,512 UTC rows with complete precipitation totals.

## Local event hours

The notebook converts the UTC end times to `Asia/Colombo` and estimates each whole local hour using half of each overlapping source total. For example, the estimate for 08:00–09:00 on 1 October 2016 uses 0.0 mm from the source hour ending at 08:30 and 0.3 mm from the one ending at 09:30, for **0.15 mm**. The method assumes rainfall is spread uniformly within each source hour. Only adjacent source hours can contribute, and both must have valid totals.

Every October had **744** valid local hours and every November had **720**. The notebook uses the **10,248** local hours from 2016–2022 to fit parameters and reserves the **4,392** hours from 2023–2025 for evaluation. It retains the full precipitation values and both source-bin totals for threshold and timing sensitivity checks.

## Attribution and licence

Source data are [ECMWF ERA5 hourly data on single levels](https://doi.org/10.24381/cds.adbb2d47), produced for the Copernicus Climate Change Service and accessed through [Open-Meteo](https://open-meteo.com/en/docs/historical-weather-api). The [ERA5 catalogue](https://cds.climate.copernicus.eu/stac-browser/collections/reanalysis-era5-single-levels) and [Open-Meteo terms](https://open-meteo.com/en/terms) identify the data licence as [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The project extracts the selected ERA5 records to CSV and estimates whole local-hour totals in the notebook. The free API access terms apply to this educational use.

Map point from [OpenStreetMap contributors](https://www.openstreetmap.org/copyright).
