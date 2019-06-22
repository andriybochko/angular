import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  userMessage: Array<IMessage>;
  userName: string;
  themeName: string;
  messageValue: string;
  dateNow: any;
  editDate: any;
  editTheme: string;
  editMessageValue: string;
  editIndex: number;

  constructor() {
    this.userMessage = new Array();
  }

  public createMessage(): void {
    this.dateNow = new Date();
    this.userMessage.push(new Message(this.userName, this.themeName, this.messageValue, this.dateNow));
    this.themeName = '';
    this.messageValue = '';
  }

  public removeMessage(message: IMessage): void {
    const index = this.userMessage.indexOf(message);
    this.userMessage.splice(index, 1);
  }

  public changeMessage(index: number, message: IMessage): void {
    this.editTheme = message.theme;
    this.editMessageValue = message.message;
    this.editIndex = index;
  }

  public saveMessage(): void {
    this.editDate = new Date();
    this.userMessage[this.editIndex].theme = this.editTheme;
    this.userMessage[this.editIndex].message = this.editMessageValue;
    this.userMessage[this.editIndex].date = this.editDate;
    this.editTheme = '';
    this.editMessageValue = '';
  }

  ngOnInit() {
  }

}

interface IMessage {
  name: string;
  theme: string;
  message: string;
  date: any;
}

class Message implements IMessage {
  constructor(
    public name: string,
    public theme: string,
    public message: string,
    public date: any
  ) {}
}
