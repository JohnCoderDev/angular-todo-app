import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TaskComponent } from '../task/task.component';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-task-list',
  imports: [TaskComponent, MatIconModule, MatButtonModule, MatInputModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  constructor(public taskService: TaskService) { }
  createTask() {
    this.taskService.createTask();
  }

  removeCompletedTasks() {
    this.taskService.getTasks().map(e => {
      if (e.isConcluded) {
        this.taskService.deleteTask(e.id)
      }
    })
  }
}
