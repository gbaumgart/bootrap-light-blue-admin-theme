import { NgModule }      from '@angular/core';

import { D3Module } from '../../layout/directives/d3/d3.module';

import 'nvd3';

import { Nvd3Chart } from './nvd3.directive';

@NgModule({
  imports: [
    D3Module
  ],
  declarations: [
    Nvd3Chart
  ],
  exports: [
    Nvd3Chart
  ]
})
export class Nvd3ChartModule {
}
