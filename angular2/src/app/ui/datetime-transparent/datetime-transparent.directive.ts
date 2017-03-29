import { Directive, ElementRef, Input } from '@angular/core';
declare let jQuery: any;

@Directive ({
  selector: '[datetime-transparent]'
})

export class DatetimeTransparent {
  @Input('showAddon') showAddon: Boolean;
  $el: any;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
  }

  render(): void {
    this.$el.find('input').addClass('input-transparent addon-hidden');
    if (!this.showAddon) {
      let $addon = this.$el.find('.input-group-addon');
      $addon.hide();
    }
  }

  ngOnInit(): void {
    this.render();
  }
}
