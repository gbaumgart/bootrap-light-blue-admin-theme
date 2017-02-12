import { Component } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: '[dialogs]',
  templateUrl: './dialogs.template.html',
  styleUrls: [ './dialogs.style.scss' ]
})
export class Dialogs {

  ngOnInit() {
    jQuery('[data-toggle="popover"]').popover();
  }

}
