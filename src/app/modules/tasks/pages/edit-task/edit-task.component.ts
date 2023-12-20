import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/core/services/tasks.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {


  editTask: FormGroup;
  taskId: string = '';
  userId: string = '';
  constructionId: string = '';
  tasksService = inject(TasksService)
  location = inject(Location);
  router = inject(Router)
  activatedRoute = inject(ActivatedRoute)

  constructor() {
    this.editTask = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      deadline: new FormControl(null, Validators.required),
      assignment_date: new FormControl(null, Validators.required),
      priority: new FormControl(null, Validators.required),
      Constructions_id: new FormControl(),
      users_id: new FormControl()
    })
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      this.taskId = params['taskId']
      this.userId = params['userId']
      this.constructionId = params['constructionId']
      const response = await this.tasksService.getTaskById(this.taskId)
      //hay que pasarle un objeto con los mismo campos que definimos en el form group
      const { title, description, deadline, assignment_date, priority, Constructions_id, users_id } = response
      this.editTask.setValue({ title, description, deadline, assignment_date, priority, Constructions_id, users_id })

    })

  }

  async onSubmit() {
    if (this.editTask.valid) {
      try {
        const response = this.tasksService.updateTaskById(this.taskId, this.editTask.value);
        console.log(response);

        Swal.fire({
          icon: 'success',
          title: 'Tarea editada correctamente',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#008000',
          color: 'white',
          background: '#0f0f0f',
        }).then(() => {
          this.router.navigate([`/tasks`, 'task', this.userId, this.constructionId]);
          // task/:userId/:constructionId
        });
      } catch (error) {
        console.log('error');
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Datos editados erróneos',
        text: 'Por favor, completa todos los campos de la tarea de forma correcta.',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#af1e2d',
        color: 'white',
        background: '#0f0f0f',
      });
    }
  }















  checkError(controlName: string, errorName: string) {
    return this.editTask.get(controlName)?.hasError(errorName) && this.editTask.get(controlName)?.touched;
  };
}
