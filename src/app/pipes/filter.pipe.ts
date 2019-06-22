import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(phoneBook: Array<any>, find?: string): any {
    if (!phoneBook) { return []; }
    if (!find) { return phoneBook; }
    return phoneBook.filter(user =>
    user.firstName.toLowerCase().includes(find.toLowerCase()) ||
    user.lastName.toLowerCase().includes(find.toLowerCase()) ||
    user.phoneNumber.includes(find)
    );
  }
}
