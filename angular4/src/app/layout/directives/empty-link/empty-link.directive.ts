import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[href=#]'
})

export class EmptyLink {
  constructor(el: ElementRef, renderer: Renderer2) {

    renderer.listen(el.nativeElement, 'click', () => {
      return false;
    });
  }
}
