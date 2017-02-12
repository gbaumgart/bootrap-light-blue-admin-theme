import { Injectable } from '@angular/core';

@Injectable()
export class CheckAllService {

  public checkAll($event, table) {
    let checked = $event.target.checked;
    let checkboxes = table.querySelectorAll('input[type=checkbox]');
    for (let checkbox of checkboxes) {
      checkbox.checked = checked;
    }
  }
}
