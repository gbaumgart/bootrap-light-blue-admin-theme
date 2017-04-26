import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Search } from './search/search.component';
import { Invoice } from './invoice/invoice.component';

console.log('`Detail` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', component: Search},
  {path: 'invoice', component: Invoice},
  {path: 'inbox', loadChildren: './inbox/inbox.module#InboxModule' }
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Search,
    Invoice
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class SpecialModule {
  static routes = routes;
}
