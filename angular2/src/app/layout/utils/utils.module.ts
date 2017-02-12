import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProgressAnimate } from './directives/progress-animate.directive';

@NgModule({
  declarations: [
    ProgressAnimate
  ],
  exports: [
    ProgressAnimate
  ],
  imports: [
    CommonModule
  ]
})
export class UtilsModule {
}
