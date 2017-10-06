import { Component, ViewEncapsulation, ElementRef, Renderer, ViewChild, NgZone } from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';


@Component({
  selector: 'layout',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './layout.template.html'
})
export class Layout {
  sidebarState: boolean = true;
  @ViewChild('spinnerElement') spinnerElement: ElementRef;
  @ViewChild('routerComponent') routerComponent: ElementRef;

  constructor(private el: ElementRef, private renderer: Renderer, private router: Router, private ngZone: NgZone) {
    router.events.subscribe((event: RouterEvent) => {
      setTimeout(() => {
        this._navigationInterceptor(event);
      })
    });
  }

  private _navigationInterceptor(event: RouterEvent): void {

    if (event instanceof NavigationStart) {
      // We wanna run this function outside of Angular's zone to
      // bypass change detection
      this.ngZone.runOutsideAngular(() => {

        // For simplicity we are going to turn opacity on / off
        // you could add/remove a class for more advanced styling
        // and enter/leave animation of the spinner
        this.renderer.setElementStyle(
          this.spinnerElement.nativeElement,
          'opacity',
          '1'
        );
        this.renderer.setElementStyle(
          this.routerComponent.nativeElement,
          'opacity',
          '0'
        );
      });
    }
    if (event instanceof NavigationEnd) {
      this._hideSpinner();
    }

    // Set loading state to false in both of the below events to
    // hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this._hideSpinner();
    }
    if (event instanceof NavigationError) {
      this._hideSpinner();
    }
  }

  private _hideSpinner(): void {
    // We wanna run this function outside of Angular's zone to
    // bypass change detection,
    this.ngZone.runOutsideAngular(() => {

      // For simplicity we are going to turn opacity on / off
      // you could add/remove a class for more advanced styling
      // and enter/leave animation of the spinner
      this.renderer.setElementStyle(
        this.spinnerElement.nativeElement,
        'opacity',
        '0'
      );
      this.renderer.setElementStyle(
        this.routerComponent.nativeElement,
        'opacity',
        '1'
      );
    });
  }

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
