import { Directive, ElementRef, Input } from '@angular/core';
declare let jQuery: any;

@Directive ({
  selector: '[jq-sparkline]'
})

export class JqSparkline {
  $el: any;
  @Input() data: any;
  @Input() options: Array<any>;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
  }

  render(): void {
    let model = jQuery.type(this.data) === 'string' ?
      this.data.replace(/(^,)|(,$)/g, '')
      : this.data,
      options = this.options;
    // enabling composite chart if array passed
    if (jQuery.type(model) === 'array' && jQuery.type(options) === 'array') {
      options.forEach((singleOptions, i) => {
        if (i === 0) {
          this.$el.sparkline(model[i], singleOptions);
        } else { // set composite for next calls
          this.$el.sparkline(model[i], jQuery.extend({composite: true}, singleOptions));
        }
      });
    } else {
      let data;
      // Make sure we have an array of numbers
      jQuery.type(model) === 'array' ? data = model : data = model.split(',');
      jQuery(window).on('sn:resize', () => { this.$el.sparkline(data, options); });
      this.$el.sparkline(data, options);
    }
  }

  ngOnInit(): void {
    this.render();
  }
}
