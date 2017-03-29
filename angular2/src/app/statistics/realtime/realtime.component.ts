import { Component, ViewEncapsulation } from '@angular/core';

declare let Rickshaw: any;

import { ColorsData } from '../colors.data';

@Component({
  selector: '[realtime]',
  templateUrl: './realtime.template.html',
  styleUrls: [ './realtime.style.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class Realtime {
  seriesData: Array<any>;
  series: Array<any>;
  chartHeight: number = 300;
  messages: Array<string>;
  rickshawRandom: any;

  ngOnInit(): void {
    this.initRandom();
    this.initSeriesData();
    this.initSeries();
    this.initMessages();
  }

  initRandom(): void {
    this.rickshawRandom = new Rickshaw.Fixtures.RandomData(150);
  }

  initSeries(): void {
    this.series = [
      {
        color: ColorsData['$blue'],
        data: this.seriesData[0],
        name: 'Belarus'
      }, {
        color: ColorsData['$green'],
        data: this.seriesData[2],
        name: 'Canada'
      }, {
        color: ColorsData['$orange'],
        data: this.seriesData[3],
        name: 'UK'
      }, {
        color: ColorsData['$red'],
        data: this.seriesData[4],
        name: 'US'
      }
    ];
  }

  initSeriesData(): void {
    this.seriesData = [ [], [], [], [], [] ];

    for (let i = 0; i < 150; i++) {
      this.rickshawRandom.addData(this.seriesData);
    }
  }

  initMessages(): void {
    this.messages =  [
      'Changed home page welcome message',
      'Minified JS and CSS',
      'Changed button color from blue to green',
      'Refactored SQL query to use indexed columns',
      'Added additional logging for debugging',
      'Fixed typo',
      'Rewrite conditional logic for clarity',
      'Added documentation for new methods'
    ];
  }
}
