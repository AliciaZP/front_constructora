import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {


  editTask: FormGroup;
  taskId: string = '';
  tasksService = inject(TasksService)

  router = inject(Router)
  activatedRoute = inject(ActivatedRoute)

  constructor() {
    this.editTask = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      deadline: new FormControl(),
      assignment_date: new FormControl(),
      priority: new FormControl(),
    })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.taskId = params['taskId']
      const response = this.tasksService.getTaskById(this.taskId)
      //hay que pasarle un objeto con los mismo campos que definimos en el form group
      const { title, description, deadline, assignment_date, priority } = response
      this.editTask.setValue({ title, description, deadline, assignment_date, priority })
    })


  }
  onSubmit() {
    if (this.editTask.valid) {
      this.tasksService.updateTaskById(this.taskId, this.editTask.value);
      this.router.navigate([`/tasks`]);
    } else {
      console.log('error');
    }
  };


  checkError(controlName: string, errorName: string) {
    return this.editTask.get(controlName)?.hasError(errorName) && this.editTask.get(controlName)?.touched;
  };
}