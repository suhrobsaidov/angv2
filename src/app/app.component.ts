import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items = [];
  public newTask;
  // tslint:disable-next-line:typedef
  public addToList() {
    if (this.newTask === '') {
    }
    else {
      this.items.push(this.newTask);
      this.newTask = '';
    }
  }
  // tslint:disable-next-line:typedef
  public deleteTask(index) {
    this.items.splice(index, 1);
  }
}
