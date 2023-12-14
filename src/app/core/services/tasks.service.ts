import { Injectable } from '@angular/core';
import { TasksDB } from 'src/app/db/tasks.db';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  private arrTasks: Task[] = [...TasksDB]

  getAll() {
    return this.arrTasks;
  }

  getTaskById(taskId: string) {

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
