import { Component, ViewEncapsulation } from '@angular/core';

declare let jQuery: any;

@Component({
  selector: '[tabs]',
  templateUrl: './tabs.template.html',
  styleUrls: [ './tabs.style.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class Tabs {
  ngOnInit(): void {
    jQuery('.nav-tabs').on('shown.bs.tab', 'a', (e) => {
      if (e.relatedTarget) {
        jQuery(e.relatedTarget).removeClass('active');
      }
    });
  }
}
