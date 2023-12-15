import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/core/services/tasks.service';
import Swal from 'sweetalert2';

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

  async onSubmit() {
    if (this.newTask.valid) {
      await this.tasksService.createTask(this.newTask.value);
      Swal.fire({
        icon: 'success',
        title: 'Tarea creada correctamente',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#008000',
        color: 'white',
        background: '#0f0f0f',
      }).then(() => {
        this.router.navigate(['/tasks']);
      });
    } else {
      console.log('error');
      Swal.fire({
        icon: 'error',
        title: 'Datos erróneos',
        text: 'Por favor, completa todos los campos de la tarea de forma correcta.',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#af1e2d',
        color: 'white',
        background: '#0f0f0f',
      });
    }
  }

  checkError(controlName: string, errorName: string) {
    return this.newTask.get(controlName)?.hasError(errorName) && this.newTask.get(controlName)?.touched;
  };


}
