import { Component } from '@angular/core';

@Component({
  selector: '[invoice]',
  templateUrl: './invoice.template.html',
  styleUrls: [ './invoice.style.scss' ]
})
export class Invoice {

  printInvoice() {
    window.print();
  }

}
