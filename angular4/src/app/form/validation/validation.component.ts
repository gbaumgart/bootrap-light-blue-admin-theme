import { Component } from '@angular/core';
declare let jQuery: any;

@Component({
  selector: '[validation]',
  templateUrl: './validation.template.html',
  styleUrls: [ './validation.style.scss' ]
})
export class Validation {
  ngOnInit(): void {
    jQuery('.parsleyjs').parsley();
  }
}
