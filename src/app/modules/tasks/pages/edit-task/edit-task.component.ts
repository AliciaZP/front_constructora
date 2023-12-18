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
  userId: string = '';
  constructionId: string = '';
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
      Constructions_id: new FormControl(),
      users_id: new FormControl()
    })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      this.taskId = params['taskId']
      this.userId = params['userId']
      this.constructionId = params['constructionId']
      const response = await this.tasksService.getTaskById(this.taskId)
      //hay que pasarle un objeto con los mismo campos que definimos en el form group
      const { title, description, deadline, assignment_date, priority, Constructions_id, users_id } = response
      this.editTask.setValue({ title, description, deadline, assignment_date, priority, Constructions_id, users_id})

    })

  }
  async onSubmit() {
    try {
      if (this.editTask.valid) {
        const response = await this.tasksService.updateTaskById(this.taskId, this.editTask.value);
        console.log(response)
        this.router.navigate([`/tasks`,'task', this.userId, this.constructionId]);
        // task/:userId/:constructionId
      } else {
        console.log('error');
      }

    } catch (error) {
      console.log(error)
    }
  };


  checkError(controlName: string, errorName: string) {
    return this.editTask.get(controlName)?.hasError(errorName) && this.editTask.get(controlName)?.touched;
  };
}
