import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[href=#]'
})

export class EmptyLink {
  constructor(el: ElementRef, renderer: Renderer) {

    renderer.listen(el.nativeElement, 'click', () => {
      return false;
    });
  }
}
