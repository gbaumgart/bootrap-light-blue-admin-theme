import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Widget } from './widget.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [Widget],
  exports: [Widget]
})
export class WidgetModule {
}
