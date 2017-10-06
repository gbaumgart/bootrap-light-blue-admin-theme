import { Component, ViewEncapsulation } from '@angular/core';

declare let jQuery: any;
declare let d3: any;
declare let nv: any;

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.template.html',
  styleUrls: [
    './dashboard.style.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class Dashboard {
  nvd31Chart: any;
  nvd31Data: any;

  messages = [
    {
      'time': '4 min',
      'sender': 'Tikhon Laninga',
      'text': 'Hey Sam, how is it going? But I must explain to you how all this mistaken\
      idea of denouncing of a pleasure and praising pain was born',
      'image': 'assets/img/2.png'
    },
    {
      'time': '3 min',
      'sender': 'Cenhelm Houston',
      'text': 'Pretty good. Doing my homework..  No one rejects, dislikes, or avoids\
        pleasure itself, because it is pleasure, but because',
      'image': 'assets/img/1.png'
    },
    {
      'time': '2 min',
      'sender': 'Tikhon Laninga',
      'text': 'Anys chance to go out? To take a trivial example, which of us ever undertakes\
        laborious physical exercise, except to obtain some advantage',
      'image': 'assets/img/2.png'
    },
    {
      'time': '2 min',
      'sender': 'Cenhelm Houston',
      'text': '.. Maybe 40-50 mins. I don\'t know exactly. On the other hand, we denounce\
      with righteous indignation and dislike men who are so beguiled',
      'image': 'assets/img/1.png'
    },
    {
      'time': '1 min',
      'sender': 'Tikhon Laninga',
      'text': 'Anyway sounds great! These cases are perfectly simple and easy to\
      distinguish.',
      'image': 'assets/img/2.png'
    }
  ];

  tableSparklineValues: any = [[], [], [], [], []];
  tableSparklineOptions: any = [
    {
      lineColor: '#3ecd74',
      fillColor: 'rgba(86, 188, 118, 0.1)'
    },
    {
      lineColor: '#f2c34d',
      fillColor: 'rgba(234, 200, 94, 0.1)'
    },
    {
      lineColor: '#4e91ce',
      fillColor: 'rgba(106, 141, 167, 0.1)'
    },
    {
      lineColor: '#f25118',
      fillColor: 'rgba(229, 96, 59, 0.1)'
    },
    {
      lineColor: '#fff',
      fillColor: 'rgba(128, 128, 128, 0.2)'
    }
  ];

  tableSparklineGeneralOptions: any = {
    width: '150px',
    height: '30px',
    lineWidth: '2',
    spotRadius: '2',
    highlightLineColor: '#666',
    highlightSpotColor: '#666',
    spotColor: false,
    minSpotColor: false,
    maxSpotColor: false
  };

  constructor() {
    for (let i = 0; i < this.tableSparklineValues.length; i++) {
      this.tableSparklineValues[i] = [
        10 + this.randomValue(), 15 + this.randomValue(),
        20 + this.randomValue(), 15 + this.randomValue(),
        25 + this.randomValue(), 25 + this.randomValue(),
        30 + this.randomValue(), 30 + this.randomValue(),
        40 + this.randomValue()
      ];
    }

    for (let i = 0; i < this.tableSparklineOptions.length; i++) {
      Object.assign(this.tableSparklineOptions[i], this.tableSparklineGeneralOptions);
    }
  }

  randomValue() {
    return Math.floor( Math.random() * 40 );
  }

  ngOnInit(): void {
    this.applyNvd3Data();

    jQuery('#feed').slimscroll({
      height: 'auto',
      size: '5px',
      alwaysVisible: true,
      railVisible: true
    });
  }

  applyNvd3Data(): void {
    /* Inspired by Lee Byron's test data generator. */
    function _stream_layers(n, m, o): Array<any> {
      if (arguments.length < 3) {
        o = 0;
      }
      function bump(a): void {
        let x = 1 / (.1 + Math.random()),
          y = 2 * Math.random() - .5,
          z = 10 / (.1 + Math.random());
        for (let i = 0; i < m; i++) {
          let w = (i / m - y) * z;
          a[i] += x * Math.exp(-w * w);
        }
      }

      return d3.range(n).map(function (): Array<Object> {
        let a = [], i;
        for (i = 0; i < m; i++) {
          a[i] = o + o * Math.random();
        }
        for (i = 0; i < 5; i++) {
          bump(a);
        }
        return a.map(function (d, iItem): Object {
          return {x: iItem, y: Math.max(0, d)};
        });
      });
    }

    function testData(streamNames, pointCount): Array<any> {
      let now = new Date().getTime(),
        day = 1000 * 60 * 60 * 24, // milliseconds
        daysAgoCount = 60,
        daysAgo = daysAgoCount * day,
        daysAgoDate = now - daysAgo,
        pointsCount = pointCount || 45, // less for better performance
        daysPerPoint = daysAgoCount / pointsCount;
      return _stream_layers(streamNames.length, pointsCount, .1).map(function (data, i): Object {
        return {
          key: streamNames[i],
          values: data.map(function (d, j): Object {
            return {
              x: daysAgoDate + d.x * day * daysPerPoint,
              y: Math.floor(d.y * 100) // just a coefficient,
            };
          })
        };
      });
    }

    this.nvd31Chart = nv.models.lineChart()
      .useInteractiveGuideline(true)
      .margin({left: 28, bottom: 30, right: 0})
      .color(['#4380bf', '#38b05e']);

    this.nvd31Chart.xAxis
      .showMaxMin(false)
      .tickFormat(function (d): Object {
        return d3.time.format('%b %d')(new Date(d));
      });

    this.nvd31Chart.yAxis
      .showMaxMin(false)
      .tickFormat(d3.format(',f'));

    this.nvd31Data = testData(['Unique', 'Visits'], 30);
    this.nvd31Data[0].area = true;
  };
}
