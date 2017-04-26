import { NgModule }      from '@angular/core';

import 'jquery-flot';
import 'jquery.flot.animator/jquery.flot.animator';
import 'jquery-flot/jquery.flot.time.js';

import { FlotChart } from './flot.directive';

@NgModule({
  declarations: [
    FlotChart
  ],
  exports: [
    FlotChart
  ]
})
export class FlotChartModule {
}
