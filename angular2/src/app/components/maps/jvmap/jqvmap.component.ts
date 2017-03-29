import { Component, Input, Output,
  ElementRef, ViewEncapsulation, EventEmitter } from '@angular/core';
declare let jQuery: any;

import 'jqvmap/dist/jquery.vmap';
import 'jqvmap/dist/maps/jquery.vmap.world';
import 'jqvmap/dist/maps/continents/jquery.vmap.australia';
import 'jqvmap/dist/maps/jquery.vmap.europe';
import 'jqvmap/dist/maps/jquery.vmap.usa';

@Component({
  selector: 'jqvmap',
  templateUrl: './jqvmap.template.html',
  styleUrls: [ './jqvmap.style.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class Jqvmap {
  @Input() map: string = 'world_en';
  @Input() zoomed: boolean = false;
  @Output() regionClick = new EventEmitter();
  @Input() options: any = {
    enableZoom: true,
    hoverColor: 'orange',
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: 'red',
    selectedRegion: null,
    showTooltip: true,
    onRegionClick: (event, code, region) => {
      this.onRegionClick({event, code, region});
    }
  };
  constructor(public el: ElementRef) {

  }

  onRegionClick($event) {
    this.regionClick.emit($event);
  }

  initVectorMap(map, zoomed) {
    let options = this.options;
    options.map = map;
    jQuery(this.el.nativeElement).empty();
    jQuery(this.el.nativeElement).vectorMap(this.options);

    if (zoomed) {
      jQuery(this.el.nativeElement).vectorMap('zoomIn');
      jQuery(this.el.nativeElement).vectorMap('zoomIn');
      jQuery(this.el.nativeElement).vectorMap('zoomIn');
    }
  }

  ngOnInit() {
    this.initVectorMap(this.map, this.zoomed);
  }
}
