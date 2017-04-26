import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Landing } from './landing.component';

export const routes = [
  { path: '', component: Landing, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    Landing
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class LandingModule {
  static routes = routes;
}
