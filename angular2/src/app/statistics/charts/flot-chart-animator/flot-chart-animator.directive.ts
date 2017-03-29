import { Directive, ElementRef, Input } from '@angular/core';

declare let jQuery: any;

@Directive({
  selector: '[flot-chart-animator]'
})

export class FlotChartAnimator {
  $el: any;
  @Input() data: any;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
  }

  render(): void {
    let data = this.data;
    let $el = this.$el;
    let d = this;

    function resize(): void {
      jQuery.plotAnimator($el, data, {
        xaxis: {
          tickLength: 0,
          tickColor: 'transparent',
          tickDecimals: 0,
          min: 2,
          font : {
            lineHeight: 12,
            weight: 300,
            family: 'Open Sans',
            size: 12,
            color: '#f8f8f8'
          }
        },
        yaxis: {
          tickDecimals: 0,
          tickColor: 'transparent',
          font : {
            lineHeight: 12,
            weight: 300,
            family: 'Open Sans',
            size: 12,
            color: '#f8f8f8'
          }
        },
        grid: {
          backgroundColor: { colors: [ 'transparent', 'transparent' ] },
          borderWidth: 0,
          borderColor: 'transparent',
          margin: 0,
          minBorderMargin: 0,
          labelMargin: 20,
          hoverable: true,
          clickable: true,
          mouseActiveRadius: 6
        },
        legend: false
      });
    }

    jQuery(window).on('sn:resize', resize);
    resize();
  }

  ngOnInit(): void {
    this.render();
  }
}
