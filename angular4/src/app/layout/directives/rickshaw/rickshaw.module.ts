import { NgModule }      from '@angular/core';

import { D3Module } from '../d3/d3.module';

import { RickshawChart } from './rickshaw.directive';

import 'jquery-ui';
import 'jquery-ui/ui/widgets/sortable.js';
import 'jquery-ui/ui/widgets/resizable.js';


@NgModule({
  imports: [
    D3Module
  ],
  declarations: [
    RickshawChart
  ],
  exports: [
    RickshawChart
  ]
})
export class RickshawChartModule {
}
