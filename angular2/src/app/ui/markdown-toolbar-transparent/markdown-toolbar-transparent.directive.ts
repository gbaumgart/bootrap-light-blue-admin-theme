import { Directive, ElementRef, Input } from '@angular/core';
declare let jQuery: any;

@Directive ({
  selector: '[markdown-toolbar-transparent]'
})

export class MarkdownToolbarTransparent {
  el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
  }

  render(): void {
    let btns = this.el.nativeElement.querySelectorAll('.btn-toolbar .btn');
    btns.forEach((btn) => {
      console.log(btn.classList);
      btn.classList.remove('btn-default', 'btn-primary');
      // btn.classList.remove('btn-primary');
      btn.classList.add('btn-transparent');
    });
  }

  ngOnInit(): void {
    this.render();
  }
}
