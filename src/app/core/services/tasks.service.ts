import { Injectable, inject } from '@angular/core';
import { TasksDB } from 'src/app/db/tasks.db';
import { Task } from '../interfaces/task.interface';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  httpClient = inject(HttpClient);
  url: string = 'http://localhost:3000/api/tasks'

  constructor() { }

  private arrTasks: Task[] = [...TasksDB]

  getAll() {
    return this.arrTasks;
  }

  getTaskByCWId(userId: number, constructionId: number) {
    return firstValueFrom(
      this.httpClient.get<Task[]>(`${this.url}/worker/${constructionId}/construction/${userId}`)
    )
  };

  createTask(pTask: Task) {
    const TasksDB = localStorage.getItem('array_newTasks');
    if (TasksDB) {
      this.arrTasks = JSON.parse(TasksDB);
    }
    this.arrTasks.push(pTask);
    localStorage.setItem('array_newTasks', JSON.stringify(this.arrTasks));
  }

  updateTaskById(taskId: string, formUpdate: Task): void {
    const taskIndex = this.arrTasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      this.arrTasks[taskIndex] = { ...this.arrTasks[taskIndex], ...formUpdate };
    }
  }

  //Funciones para los filtros
  getTypes() {
  }

  filterByType() {
  }

  orderByDate() {
  }

}
