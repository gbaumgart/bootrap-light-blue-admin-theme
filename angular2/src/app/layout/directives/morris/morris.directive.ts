import { Directive, ElementRef, Input } from '@angular/core';
declare let jQuery: any;

@Directive ({
  selector: '[morris-chart]'
})

export class MorrisChart {
  $el: any;
  @Input() height: number;
  @Input() type: string;
  @Input() options: any;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
  }

  capitalise(stringVar): string {
    return stringVar.charAt(0).toUpperCase() + stringVar.slice(1).toLowerCase();
  }

  render(): void {
    this.$el.css({height: this.height}); // safari svg height fix
    /* tslint:disable */
    window['Morris'][this.capitalise(this.type)](jQuery.extend({
      element: this.$el[0]
    }, this.options));
    /* tslint:enable */
  }

  ngOnInit(): void {
    this.render();
  }
}
