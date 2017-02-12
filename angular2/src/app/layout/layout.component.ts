import { Component, ViewEncapsulation, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'layout',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './layout.template.html'
})
export class Layout {
  sidebarState: boolean = true;

  constructor(private el: ElementRef, private renderer: Renderer) {  }

  sidebarPosition(position): void {
    let pos = position === 'Right' ? true : false;
    this.renderer.setElementClass(this.el.nativeElement, 'sidebar-on-right', pos);
  }

  sidebarDisplay(display): void {
    let _display = display === 'Hide' ? true : false;
    this.renderer.setElementClass(this.el.nativeElement, 'sidebar-hidden', _display);
  }

  openSidebar(): void {
    let sidebar = document.getElementById('side-nav');
    let sidebarMarginTop = parseInt(window.getComputedStyle(sidebar).marginTop, 10);
    let sidebarMarginBottom = parseInt(window.getComputedStyle(sidebar).marginBottom, 10);
    let sidebarHeight = sidebar.offsetHeight + sidebarMarginTop + sidebarMarginBottom;

    if (this.sidebarState) {
      this.renderer.setElementStyle(this.el.nativeElement
        .querySelector('.content'), 'margin-top', sidebarHeight + 'px');
    } else {
      this.renderer.setElementStyle(this.el.nativeElement
        .querySelector('.content'), 'margin-top', '0px');
    }

    this.sidebarState = !this.sidebarState;
  }
}
