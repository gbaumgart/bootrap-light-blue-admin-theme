import { Component, ViewEncapsulation } from '@angular/core';

declare let jQuery;

@Component({
  selector: '[gallery]',
  templateUrl: './gallery.template.html',
  styleUrls: [ './gallery.style.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class Gallery {
  ngOnInit(): void {
   this.initGallery();
  }

  initGallery(): void {
    jQuery('#grid').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  }
}
