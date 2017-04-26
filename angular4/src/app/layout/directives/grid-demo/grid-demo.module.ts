import { NgModule }      from '@angular/core';
import { GridDemo } from './grid-demo.directive';

@NgModule({
  declarations: [
    GridDemo
  ],
  exports: [
    GridDemo
  ]
})
export class GridDemoModule {
}
