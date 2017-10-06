import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import 'jquery-slimscroll';

import { Dashboard } from './dashboard.component';
import { Chat } from './chat/chat.component';
import { WidgetModule } from '../layout/widget/widget.module';

import { Nvd3ChartModule } from './nvd3/nvd3.module';
import { JqSparklineModule } from '../layout/directives/sparkline/sparkline.module';

export const routes = [
  { path: '', component: Dashboard, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    Dashboard,
    Chat
  ],
  imports: [
    CommonModule,
    FormsModule,
    Nvd3ChartModule,
    WidgetModule,
    JqSparklineModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule {
  static routes = routes;
}
