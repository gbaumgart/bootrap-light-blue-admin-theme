import { NgModule }      from '@angular/core';

import 'jquery-sparkline';

import { JqSparkline } from './sparkline.directive';

@NgModule({
  declarations: [
    JqSparkline
  ],
  exports: [
    JqSparkline
  ]
})
export class JqSparklineModule {
}
