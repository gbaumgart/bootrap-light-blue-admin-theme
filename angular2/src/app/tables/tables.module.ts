import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaginationModule, DropdownModule } from 'ng2-bootstrap';
import { DataTableModule } from 'angular2-datatable';
import { Ng2TableModule } from 'ng2-table';
import { JqSparklineModule } from '../layout/directives/sparkline/sparkline.module';
import { WidgetModule } from '../layout/widget/widget.module';
import { UtilsModule } from '../layout/utils/utils.module';

import { Static } from './static/static.component';
import { Dynamic } from './dynamic/dynamic.component';
import { SearchPipe } from './dynamic/pipes/search-pipe';

export const routes = [
  {path: '', redirectTo: 'static', pathMatch: 'full'},
  {path: 'static', component: Static},
  {path: 'dynamic', component: Dynamic}
];

@NgModule({
  declarations: [
    Static,
    Dynamic,
    SearchPipe
  ],
  imports: [
    DataTableModule,
    CommonModule,
    FormsModule,
    PaginationModule.forRoot(),
    WidgetModule,
    Ng2TableModule,
    JqSparklineModule,
    UtilsModule,
    DropdownModule.forRoot(),
    RouterModule.forChild(routes)
  ]
})
export class TablesModule {
  static routes = routes;
}
