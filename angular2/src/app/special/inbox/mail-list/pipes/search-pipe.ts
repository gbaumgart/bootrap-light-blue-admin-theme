import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SearchPipe'
})

export class SearchPipe implements PipeTransform {

  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(mail => {
        if (mail.sender) {
          return mail.sender.search(searchText) !== -1;
        }
        if (mail.subject) {
          return mail.subject.search(searchText) !== -1;
        }
      });
    }
  }
}
