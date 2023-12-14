import { Injectable, inject } from '@angular/core';
// import { TasksDB } from 'src/app/db/tasks.db';
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

  // private arrTasks: Task[] = [...TasksDB]

  async getAll(userId: string) {
    return firstValueFrom(
      this.httpClient.get<Task[]>(`${this.url}/user/${userId}`)
    )
  }

  getTaskById(taskId: string) {
    return firstValueFrom(
      this.httpClient.get<Task>(`${this.url}/${taskId})`)
    )
  };

  getTaskByCWId(userId: number, constructionId: number) {
    return firstValueFrom(
      this.httpClient.get<Task[]>(`${this.url}/worker/${constructionId}/construction/${userId}`)
    )
  };

  createTask(pTask: Task) {
    return firstValueFrom(
      this.httpClient.post<Task>(`${this.url}/new`, pTask)
    )
  }

  updateTaskById(taskId: string, formUpdate: Task) {
    return firstValueFrom(
      this.httpClient.put<Task>(`${this.url}/${taskId}`, formUpdate )
    )
  }

  //Funciones para los filtros
  getTypes() {
  }

  filterByType() {
  }

  orderByDate() {
  }

}
