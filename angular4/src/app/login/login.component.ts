import { Component } from '@angular/core';

@Component({
  selector: 'login',
  styleUrls: [ './login.style.scss' ],
  templateUrl: './login.template.html',
  host: {
    class: 'login-page app'
  }
})
export class Login {
  constructor() {

  }
}
