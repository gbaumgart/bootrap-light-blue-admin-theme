import { Component } from '@angular/core';
declare let jQuery: any;

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
