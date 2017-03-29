import { Directive, ElementRef, Input } from '@angular/core';
declare let jQuery: any;

@Directive ({
  selector: '[flot-chart]'
})

export class FlotChart {
  $el: any;
  @Input() data: any;
  @Input() options: string;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
  }

  render(): void {
    jQuery.plot(this.$el, this.data, this.options || {
        series: {
          lines: {
            show: true,
            lineWidth: 1,
            fill: false,
            fillColor: { colors: [{ opacity: .001 }, { opacity: .5}] }
          },
          points: {
            show: false,
            fill: true
          },
          shadowSize: 0
        },
        legend: false,
        grid: {
          show: false,
          margin: 0,
          labelMargin: 0,
          axisMargin: 0,
          hoverable: true,
          clickable: true,
          tickColor: 'rgba(255,255,255,1)',
          borderWidth: 0
        }
      });
  }

  ngOnInit(): void {
    this.render();
  }
}
