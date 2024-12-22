import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Task } from '../../model/task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  imports: [MatTooltipModule, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() taskInformation!: Task;

  constructor(private taskService: TaskService) { }

  setTaskContent(newContent: string) {
    this.taskInformation.content = newContent;
    this.taskService.updateTask(this.taskInformation);
  }

  deleteTask() {
    this.taskService.deleteTask(this.taskInformation.id);
  }

  toggleTaskConcluded() {
    this.taskInformation.isConcluded = !this.taskInformation.isConcluded;
    this.taskInformation.dateConcluded = this.taskInformation.isConcluded ? new Date() : undefined;
    this.taskService.updateTask(this.taskInformation);
  }
}
