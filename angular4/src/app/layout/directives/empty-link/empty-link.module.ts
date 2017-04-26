import { NgModule }      from '@angular/core';

import { EmptyLink } from './empty-link.directive';

@NgModule({
  declarations: [
    EmptyLink
  ],
  exports: [
    EmptyLink
  ]
})
export class EmptyLinkModule {
}
