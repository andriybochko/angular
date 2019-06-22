import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  userTask: Array<ITask>;
  taskName: string;
  editName: string;
  editIndex: number;

  constructor() {
    this.userTask = _userTask;
  }

  public changeStatus(task: ITask): void {
    task.done = !task.done;
  }

  public createTask(): void {
    this.userTask.push(new Task(this.taskName, false));
    this.taskName = '';
  }

  public removeTask(task: ITask): void {
    const index = this.userTask.indexOf(task);
    this.userTask.splice(index, 1);
  }

  public editTask(index: number, task: ITask): void {
    this.editName = task.name;
    this.editIndex = index;
  }

  public saveEditTask(): void {
    this.userTask[this.editIndex].name = this.editName;
    this.editName = '';
  }

  ngOnInit() {
  }

}

interface ITask {
  name: string;
  done: boolean;
}

class Task implements ITask {
  constructor(
    public name: string,
    public done: boolean
  ) {}
}

const _userTask: Array<ITask> = [
  {
    name: 'HTML5',
    done: true
  } as ITask,
  {
    name: 'CSS3',
    done: true
  } as ITask,
  {
    name: 'JS',
    done: true
  } as ITask,
  {
    name: 'Angular',
    done: false
  } as ITask
];
