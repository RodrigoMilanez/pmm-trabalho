import { Component } from '@angular/core';

@Component({
  selector: 'app-q4',
  templateUrl: './q4.page.html',
  styleUrls: ['./q4.page.scss'],
})
export class Q4Page  {

  tasks: { name: string; completed: boolean }[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ name: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  removeTask(task: { name: string; completed: boolean; }) {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  completeTask(task: { completed: boolean; }) {
    task.completed = true;
  }
}

import { FormsModule } from '@angular/forms';

