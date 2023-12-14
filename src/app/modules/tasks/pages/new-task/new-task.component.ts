import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {

  activatedRoute = inject(ActivatedRoute);
  constructionId: number = 0;
  userId: number = 0;
  newTask: FormGroup;
  tasksService = inject(TasksService)

  router = inject(Router)

  ngOnInit(){
    this.activatedRoute.params.subscribe((params: any) => {
      this.constructionId = parseInt(params.constructionId);
      this.userId = parseInt(params.userId);
    });

    this.newTask.get('Constructions_id')?.setValue( this.constructionId);
    this.newTask.get('users_id')?.setValue( this.userId);
  }

  constructor() {
    this.newTask = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      description: new FormControl(),
      deadline: new FormControl(),
      assignment_date: new FormControl(),
      priority: new FormControl(),
      Constructions_id: new FormControl(),
      users_id: new FormControl()
    })
  }

  async onSubmit() {
    try {
      if (this.newTask.valid) {
        const response = await this.tasksService.createTask(this.newTask.value);
        console.log(response)
        this.router.navigate(['/tasks', 'task', this.userId, this.constructionId]);
      } else {
        console.log('error');
      }

    } catch (error) {

    }
  };


  checkError(controlName: string, errorName: string) {
    return this.newTask.get(controlName)?.hasError(errorName) && this.newTask.get(controlName)?.touched;
  };


}
