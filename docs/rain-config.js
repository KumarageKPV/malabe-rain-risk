const RAIN_CONFIG = {
  "startHours": [
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
  ],
  "durations": [
    1,
    2,
    3,
    4
  ],
  "thresholds": [
    "0.1",
    "0.2",
    "0.5",
    "1"
  ],
  "months": {
    "10": "October",
    "11": "November"
  },
  "monthWeights": {
    "10": 0.5081967213114754,
    "11": 0.4918032786885246
  },
  "baselineStart": 13,
  "trainingYears": [
    2016,
    2022
  ],
  "defaults": {
    "month": "season",
    "startHour": 8,
    "durationHours": 3,
    "threshold": "0.2"
  },
  "reference": {
    "month": "10",
    "startHour": 13,
    "durationHours": 3,
    "threshold": "0.2",
    "probability": 0.804710957771055,
    "absoluteTolerance": 1e-12
  },
  "parameters": {
    "0.1": {
      "10": {
        "8": {
          "initialWet": 0.5299539170506913,
          "wetAfterDry": 0.21304347826086956,
          "wetAfterWet": 0.8798076923076923
        },
        "9": {
          "initialWet": 0.6129032258064516,
          "wetAfterDry": 0.28640776699029125,
          "wetAfterWet": 0.9008620689655172
        },
        "10": {
          "initialWet": 0.7235023041474654,
          "wetAfterDry": 0.34705882352941175,
          "wetAfterWet": 0.9589552238805971
        },
        "11": {
          "initialWet": 0.7511520737327189,
          "wetAfterDry": 0.319672131147541,
          "wetAfterWet": 0.9145569620253164
        },
        "12": {
          "initialWet": 0.7050691244239631,
          "wetAfterDry": 0.22727272727272727,
          "wetAfterWet": 0.8628048780487805
        },
        "13": {
          "initialWet": 0.7880184331797235,
          "wetAfterDry": 0.36153846153846153,
          "wetAfterWet": 0.9642857142857143
        },
        "14": {
          "initialWet": 0.8110599078341014,
          "wetAfterDry": 0.35106382978723405,
          "wetAfterWet": 0.9331395348837209
        },
        "15": {
          "initialWet": 0.783410138248848,
          "wetAfterDry": 0.20238095238095238,
          "wetAfterWet": 0.9180790960451978
        },
        "16": {
          "initialWet": 0.7603686635944701,
          "wetAfterDry": 0.3020833333333333,
          "wetAfterWet": 0.8859649122807017
        },
        "17": {
          "initialWet": 0.6728110599078341,
          "wetAfterDry": 0.1792452830188679,
          "wetAfterWet": 0.8283132530120482
        },
        "18": {
          "initialWet": 0.5622119815668203,
          "wetAfterDry": 0.0763888888888889,
          "wetAfterWet": 0.7993197278911565
        }
      },
      "11": {
        "8": {
          "initialWet": 0.3,
          "wetAfterDry": 0.11490683229813664,
          "wetAfterWet": 0.8921568627450981
        },
        "9": {
          "initialWet": 0.3904761904761905,
          "wetAfterDry": 0.17905405405405406,
          "wetAfterWet": 0.8828125
        },
        "10": {
          "initialWet": 0.49047619047619045,
          "wetAfterDry": 0.2054263565891473,
          "wetAfterWet": 0.9337349397590361
        },
        "11": {
          "initialWet": 0.5190476190476191,
          "wetAfterDry": 0.19907407407407407,
          "wetAfterWet": 0.8509615384615384
        },
        "12": {
          "initialWet": 0.5476190476190477,
          "wetAfterDry": 0.1715686274509804,
          "wetAfterWet": 0.8954545454545455
        },
        "13": {
          "initialWet": 0.6476190476190476,
          "wetAfterDry": 0.3177083333333333,
          "wetAfterWet": 0.9181034482758621
        },
        "14": {
          "initialWet": 0.7380952380952381,
          "wetAfterDry": 0.2866666666666667,
          "wetAfterWet": 0.9817518248175182
        },
        "15": {
          "initialWet": 0.7857142857142857,
          "wetAfterDry": 0.2767857142857143,
          "wetAfterWet": 0.9647435897435898
        },
        "16": {
          "initialWet": 0.7285714285714285,
          "wetAfterDry": 0.05434782608695652,
          "wetAfterWet": 0.9126506024096386
        },
        "17": {
          "initialWet": 0.6142857142857143,
          "wetAfterDry": 0.0603448275862069,
          "wetAfterWet": 0.8214285714285714
        },
        "18": {
          "initialWet": 0.5238095238095238,
          "wetAfterDry": 0.018292682926829267,
          "wetAfterWet": 0.8423076923076923
        }
      }
    },
    "0.2": {
      "10": {
        "8": {
          "initialWet": 0.2995391705069124,
          "wetAfterDry": 0.11006289308176101,
          "wetAfterWet": 0.8083333333333333
        },
        "9": {
          "initialWet": 0.37327188940092165,
          "wetAfterDry": 0.18627450980392157,
          "wetAfterWet": 0.8106060606060606
        },
        "10": {
          "initialWet": 0.45622119815668205,
          "wetAfterDry": 0.20072992700729927,
          "wetAfterWet": 0.8841463414634146
        },
        "11": {
          "initialWet": 0.5207373271889401,
          "wetAfterDry": 0.2647058823529412,
          "wetAfterWet": 0.825
        },
        "12": {
          "initialWet": 0.576036866359447,
          "wetAfterDry": 0.2523809523809524,
          "wetAfterWet": 0.8728070175438597
        },
        "13": {
          "initialWet": 0.6451612903225806,
          "wetAfterDry": 0.26344086021505375,
          "wetAfterWet": 0.9246031746031746
        },
        "14": {
          "initialWet": 0.6682027649769585,
          "wetAfterDry": 0.30128205128205127,
          "wetAfterWet": 0.8687943262411347
        },
        "15": {
          "initialWet": 0.6774193548387096,
          "wetAfterDry": 0.21232876712328766,
          "wetAfterWet": 0.9075342465753424
        },
        "16": {
          "initialWet": 0.5806451612903226,
          "wetAfterDry": 0.14788732394366197,
          "wetAfterWet": 0.7871621621621622
        },
        "17": {
          "initialWet": 0.5253456221198156,
          "wetAfterDry": 0.125,
          "wetAfterWet": 0.8149606299212598
        },
        "18": {
          "initialWet": 0.4147465437788018,
          "wetAfterDry": 0.08173076923076923,
          "wetAfterWet": 0.717391304347826
        }
      },
      "11": {
        "8": {
          "initialWet": 0.18571428571428572,
          "wetAfterDry": 0.04748603351955307,
          "wetAfterWet": 0.9545454545454546
        },
        "9": {
          "initialWet": 0.21428571428571427,
          "wetAfterDry": 0.07267441860465117,
          "wetAfterWet": 0.8375
        },
        "10": {
          "initialWet": 0.22857142857142856,
          "wetAfterDry": 0.09939759036144578,
          "wetAfterWet": 0.7065217391304348
        },
        "11": {
          "initialWet": 0.2904761904761905,
          "wetAfterDry": 0.15030674846625766,
          "wetAfterWet": 0.7653061224489796
        },
        "12": {
          "initialWet": 0.3761904761904762,
          "wetAfterDry": 0.17,
          "wetAfterWet": 0.8790322580645161
        },
        "13": {
          "initialWet": 0.5333333333333333,
          "wetAfterDry": 0.29924242424242425,
          "wetAfterWet": 0.91875
        },
        "14": {
          "initialWet": 0.6619047619047619,
          "wetAfterDry": 0.35858585858585856,
          "wetAfterWet": 0.9247787610619469
        },
        "15": {
          "initialWet": 0.7142857142857143,
          "wetAfterDry": 0.22916666666666666,
          "wetAfterWet": 0.9607142857142857
        },
        "16": {
          "initialWet": 0.6238095238095238,
          "wetAfterDry": 0.040983606557377046,
          "wetAfterWet": 0.8576158940397351
        },
        "17": {
          "initialWet": 0.5619047619047619,
          "wetAfterDry": 0.04375,
          "wetAfterWet": 0.875
        },
        "18": {
          "initialWet": 0.44285714285714284,
          "wetAfterDry": 0.026881720430107527,
          "wetAfterWet": 0.7689075630252101
        }
      }
    },
    "0.5": {
      "10": {
        "8": {
          "initialWet": 0.11981566820276497,
          "wetAfterDry": 0.03926701570680628,
          "wetAfterWet": 0.6964285714285714
        },
        "9": {
          "initialWet": 0.1336405529953917,
          "wetAfterDry": 0.049479166666666664,
          "wetAfterWet": 0.7592592592592593
        },
        "10": {
          "initialWet": 0.16129032258064516,
          "wetAfterDry": 0.06613756613756613,
          "wetAfterWet": 0.7833333333333333
        },
        "11": {
          "initialWet": 0.25806451612903225,
          "wetAfterDry": 0.13387978142076504,
          "wetAfterWet": 0.9027777777777778
        },
        "12": {
          "initialWet": 0.30414746543778803,
          "wetAfterDry": 0.12654320987654322,
          "wetAfterWet": 0.8157894736842105
        },
        "13": {
          "initialWet": 0.43317972350230416,
          "wetAfterDry": 0.23355263157894737,
          "wetAfterWet": 0.8880597014925373
        },
        "14": {
          "initialWet": 0.45622119815668205,
          "wetAfterDry": 0.16532258064516128,
          "wetAfterWet": 0.8368421052631579
        },
        "15": {
          "initialWet": 0.46543778801843316,
          "wetAfterDry": 0.13865546218487396,
          "wetAfterWet": 0.855
        },
        "16": {
          "initialWet": 0.4009216589861751,
          "wetAfterDry": 0.0811965811965812,
          "wetAfterWet": 0.7696078431372549
        },
        "17": {
          "initialWet": 0.2857142857142857,
          "wetAfterDry": 0.04961832061068702,
          "wetAfterWet": 0.6420454545454546
        },
        "18": {
          "initialWet": 0.21658986175115208,
          "wetAfterDry": 0.041666666666666664,
          "wetAfterWet": 0.6587301587301587
        }
      },
      "11": {
        "8": {
          "initialWet": 0.08095238095238096,
          "wetAfterDry": 0.007894736842105263,
          "wetAfterWet": 0.75
        },
        "9": {
          "initialWet": 0.08571428571428572,
          "wetAfterDry": 0.028350515463917526,
          "wetAfterWet": 0.75
        },
        "10": {
          "initialWet": 0.09047619047619047,
          "wetAfterDry": 0.012953367875647668,
          "wetAfterWet": 0.9210526315789473
        },
        "11": {
          "initialWet": 0.10952380952380952,
          "wetAfterDry": 0.049479166666666664,
          "wetAfterWet": 0.725
        },
        "12": {
          "initialWet": 0.19523809523809524,
          "wetAfterDry": 0.11436170212765957,
          "wetAfterWet": 0.8541666666666666
        },
        "13": {
          "initialWet": 0.3476190476190476,
          "wetAfterDry": 0.19705882352941176,
          "wetAfterWet": 0.9642857142857143
        },
        "14": {
          "initialWet": 0.4857142857142857,
          "wetAfterDry": 0.2427536231884058,
          "wetAfterWet": 0.9391891891891891
        },
        "15": {
          "initialWet": 0.5238095238095238,
          "wetAfterDry": 0.16055045871559634,
          "wetAfterWet": 0.9077669902912622
        },
        "16": {
          "initialWet": 0.5238095238095238,
          "wetAfterDry": 0.10396039603960396,
          "wetAfterWet": 0.9054054054054054
        },
        "17": {
          "initialWet": 0.4,
          "wetAfterDry": 0.034653465346534656,
          "wetAfterWet": 0.7342342342342343
        },
        "18": {
          "initialWet": 0.29523809523809524,
          "wetAfterDry": 0.05905511811023622,
          "wetAfterWet": 0.6529411764705882
        }
      }
    },
    "1": {
      "10": {
        "8": {
          "initialWet": 0.041474654377880185,
          "wetAfterDry": 0.02631578947368421,
          "wetAfterWet": 0.45
        },
        "9": {
          "initialWet": 0.059907834101382486,
          "wetAfterDry": 0.0215311004784689,
          "wetAfterWet": 0.95
        },
        "10": {
          "initialWet": 0.10138248847926268,
          "wetAfterDry": 0.05121951219512195,
          "wetAfterWet": 0.8928571428571429
        },
        "11": {
          "initialWet": 0.17050691244239632,
          "wetAfterDry": 0.10459183673469388,
          "wetAfterWet": 0.7608695652173914
        },
        "12": {
          "initialWet": 0.2119815668202765,
          "wetAfterDry": 0.09668508287292818,
          "wetAfterWet": 0.7763157894736842
        },
        "13": {
          "initialWet": 0.2764976958525346,
          "wetAfterDry": 0.11918604651162791,
          "wetAfterWet": 0.8617021276595744
        },
        "14": {
          "initialWet": 0.30414746543778803,
          "wetAfterDry": 0.11075949367088607,
          "wetAfterWet": 0.8114754098360656
        },
        "15": {
          "initialWet": 0.2903225806451613,
          "wetAfterDry": 0.08223684210526316,
          "wetAfterWet": 0.7686567164179104
        },
        "16": {
          "initialWet": 0.22580645161290322,
          "wetAfterDry": 0.08709677419354839,
          "wetAfterWet": 0.5703125
        },
        "17": {
          "initialWet": 0.16129032258064516,
          "wetAfterDry": 0.04437869822485207,
          "wetAfterWet": 0.57
        },
        "18": {
          "initialWet": 0.0967741935483871,
          "wetAfterDry": 0.02459016393442623,
          "wetAfterWet": 0.4861111111111111
        }
      },
      "11": {
        "8": {
          "initialWet": 0.047619047619047616,
          "wetAfterDry": 0.0075,
          "wetAfterWet": 0.7916666666666666
        },
        "9": {
          "initialWet": 0.05238095238095238,
          "wetAfterDry": 0.017412935323383085,
          "wetAfterWet": 0.7727272727272727
        },
        "10": {
          "initialWet": 0.06190476190476191,
          "wetAfterDry": 0.0225,
          "wetAfterWet": 0.7916666666666666
        },
        "11": {
          "initialWet": 0.07142857142857142,
          "wetAfterDry": 0.03282828282828283,
          "wetAfterWet": 0.6785714285714286
        },
        "12": {
          "initialWet": 0.13333333333333333,
          "wetAfterDry": 0.07397959183673469,
          "wetAfterWet": 0.90625
        },
        "13": {
          "initialWet": 0.2523809523809524,
          "wetAfterDry": 0.1448087431693989,
          "wetAfterWet": 0.9482758620689655
        },
        "14": {
          "initialWet": 0.3761904761904762,
          "wetAfterDry": 0.2120253164556962,
          "wetAfterWet": 0.8611111111111112
        },
        "15": {
          "initialWet": 0.43333333333333335,
          "wetAfterDry": 0.1553030303030303,
          "wetAfterWet": 0.89375
        },
        "16": {
          "initialWet": 0.4,
          "wetAfterDry": 0.12083333333333333,
          "wetAfterWet": 0.7663043478260869
        },
        "17": {
          "initialWet": 0.23333333333333334,
          "wetAfterDry": 0.027559055118110236,
          "wetAfterWet": 0.5470588235294118
        },
        "18": {
          "initialWet": 0.14761904761904762,
          "wetAfterDry": 0.040123456790123455,
          "wetAfterWet": 0.51
        }
      }
    }
  }
};
