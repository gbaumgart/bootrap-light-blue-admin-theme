import 'jquery-ui/ui/widgets/sortable.js';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Basic } from './basic/basic.component';
import { Live } from './live/live.component';
import { WidgetModule } from '../layout/widget/widget.module';
import { GridDemoModule } from '../layout/directives/grid-demo/grid-demo.module';

export const routes = [
  {path: '', redirectTo: 'basic', pathMatch: 'full'},
  {path: 'basic', component: Basic},
  {path: 'live', component: Live}
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Basic,
    Live
  ],
  imports: [
    CommonModule,
    FormsModule,
    GridDemoModule,
    WidgetModule,
    RouterModule.forChild(routes),
  ]
})
export class WidgetsModule {
  static routes = routes;
}
