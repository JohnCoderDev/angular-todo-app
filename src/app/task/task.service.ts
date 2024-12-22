import { Injectable } from '@angular/core';
import { Task } from '../../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private static tasks: Array<Task>;
  private static nextId: number = 0;
  constructor() {
    TaskService.tasks = new Array();
  }

  createTask(): void {
    const newTask = {
      id: TaskService.nextId,
      content: '',
      isConcluded: false,
      dateCreation: new Date(),
      dateConcluded: undefined
    }
    TaskService.tasks.push(newTask);
    TaskService.nextId++;
  }

  deleteTask(id: number): void {
    TaskService.tasks = TaskService.tasks.filter(e => e.id !== id);
  }

  updateTask(newTaskContent: Task): void {
    const index = TaskService.tasks.findIndex(e => e.id === newTaskContent.id)
    if (index >= 0) {
      TaskService.tasks[index] = newTaskContent;
    }
  }

  getTasks(): Array<Task> {
    return TaskService.tasks;
  }
}
