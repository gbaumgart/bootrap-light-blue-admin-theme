import { Directive, ElementRef, Input, Renderer } from '@angular/core';
declare let jQuery: any;

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
    setTimeout(() => {
      this.renderer.setElementStyle(this.el.nativeElement, 'width', '0');
      setTimeout(() => {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', this.value + '%');
      });
    });
  }
}
