import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';


@Component({
  selector: 'app-phone-book',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})

export class PhoneBookComponent implements OnInit {
  phoneBook: Array<IBook>;
  index: number;
  addFirstName: string;
  addLastName: string;
  addPhoneNumber: string;
  editFirstName: string;
  editLastName: string;
  editPhoneNumber: string;
  editIndex: number;
  sortedCollection: Array<IBook>;
  order = 'firstName';
  reverse = false;

  constructor(private orderPipe: OrderPipe) {
    this.phoneBook = _phoneBook;
    this.sortedCollection = orderPipe.transform(this.phoneBook, 'firstName');
    // console.log(this.sortedCollection);
  }

  ngOnInit() {
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }


  public addUser(): void {
    this.phoneBook.push(new Book(this.addFirstName, this.addLastName, this.addPhoneNumber));
    this.addFirstName = '';
    this.addLastName = '';
    this.addPhoneNumber = '';
  }

  public removeUser(user: IBook): void {
    const index = this.phoneBook.indexOf(user);
    this.phoneBook.splice(index, 1);
  }

  public editPhoneBook(user: IBook) {
    this.editIndex = this.phoneBook.indexOf(user);
    this.editFirstName = user.firstName;
    this.editLastName = user.lastName;
    this.editPhoneNumber = user.phoneNumber;
  }

  public changeUser(): void {
    this.phoneBook[this.editIndex].firstName = this.editFirstName;
    this.phoneBook[this.editIndex].lastName = this.editLastName;
    this.phoneBook[this.editIndex].phoneNumber = this.editPhoneNumber;
    this.editFirstName = '';
    this.editLastName = '';
    this.editPhoneNumber = '';
  }

}

interface IBook {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

class Book implements IBook {
  constructor(
    public firstName: string,
    public lastName: string,
    public phoneNumber: string
  ) {}
}

const _phoneBook: Array<IBook> = [
  {
    firstName: 'Petya',
    lastName: 'Zhuk',
    phoneNumber: '0631111111'
  } as IBook,
  {
    firstName: 'Dima',
    lastName: 'Dzhmil',
    phoneNumber: '0632222222'
  } as IBook,
  {
    firstName: 'Mykola',
    lastName: 'Baran',
    phoneNumber: '0633333333'
  } as IBook,
  {
    firstName: 'Vova',
    lastName: 'Targan',
    phoneNumber: '06314444444'
  } as IBook,
  {
    firstName: 'Vasya',
    lastName: 'Bober',
    phoneNumber: '0635555555'
  } as IBook,
  {
    firstName: 'Ivan',
    lastName: 'Komar',
    phoneNumber: '0636666666'
  } as IBook,
  {
    firstName: 'Sergiy',
    lastName: 'Muha',
    phoneNumber: '0637777777'
  } as IBook,
];
