import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RickshawChartModule } from '../layout/directives/rickshaw/rickshaw.module';
import { Nvd3ChartModule } from '../layout/directives/nvd3/nvd3.module';
import { MorrisChartModule } from '../layout/directives/morris/morris.module';
import { JqSparklineModule } from '../layout/directives/sparkline/sparkline.module';
import { FlotChartModule } from '../layout/directives/flot/flot.module';
import { WidgetModule } from '../layout/widget/widget.module';

import { Stats } from './stats/stats.component';
import { Charts } from './charts/charts.component';
import { FlotChartAnimator } from  './charts/flot-chart-animator/flot-chart-animator.directive';
import { Realtime } from './realtime/realtime.component';

import 'jquery-ui';
import 'jquery-ui/ui/widgets/sortable.js';
import 'jquery-ui/ui/widgets/resizable.js';
import 'easy-pie-chart/dist/jquery.easypiechart.js';

export const routes = [
  {path: '', redirectTo: 'stats', pathMatch: 'full'},
  {path: 'stats', component: Stats},
  {path: 'charts', component: Charts},
  {path: 'realtime', component: Realtime},
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Stats,
    Charts,
    Realtime,
    FlotChartAnimator
  ],
  imports: [
    CommonModule,
    FormsModule,
    RickshawChartModule,
    RouterModule.forChild(routes),
    JqSparklineModule,
    FlotChartModule,
    Nvd3ChartModule,
    MorrisChartModule,
    WidgetModule
  ]
})
export class StatisticsModule {
  static routes = routes;
}
