import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {


  newTask: FormGroup;
  tasksService = inject(TasksService)

  router = inject(Router)

  constructor() {
    this.newTask = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      description: new FormControl(),
      deadline: new FormControl(),
      assignment_date: new FormControl(),
      priority: new FormControl(),
    })
  }

  onSubmit() {
    if (this.newTask.valid) {
      this.tasksService.createTask(this.newTask.value);
      this.router.navigate(['/tasks']);
    } else {
      console.log('error');
    }
  };


  checkError(controlName: string, errorName: string) {
    return this.newTask.get(controlName)?.hasError(errorName) && this.newTask.get(controlName)?.touched;
  };


}
