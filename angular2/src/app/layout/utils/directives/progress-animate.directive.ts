import { Directive, ElementRef, Input, Renderer } from '@angular/core';
declare var jQuery: any;

@Directive ({
  selector: '[progress-animate]'
})

export class ProgressAnimate {
  @Input() value: number;

  constructor(
              private el: ElementRef,
              private renderer: Renderer
  ) {}

  ngOnInit(): void {
    this.renderer.setElementStyle(this.el.nativeElement, 'opacity', '0');
    setTimeout(() => {
      this.renderer.setElementStyle(this.el.nativeElement, 'transition', 'none');
      this.renderer.setElementProperty(this.el.nativeElement, 'value', 0);
      this.renderer.setElementStyle(this.el.nativeElement, 'opacity', '1');
      setTimeout(() => {
        this.renderer.setElementStyle(this.el.nativeElement, 'transition', '');
        this.renderer.setElementProperty(this.el.nativeElement, 'value', this.value);
      });
    });
  }
}
