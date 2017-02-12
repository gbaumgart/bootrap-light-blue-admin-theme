import { NgModule }      from '@angular/core';

import 'morris.js/morris.js';

import { MorrisChart } from './morris.directive';

@NgModule({
  declarations: [
    MorrisChart
  ],
  exports: [
    MorrisChart
  ]
})
export class MorrisChartModule {
}
