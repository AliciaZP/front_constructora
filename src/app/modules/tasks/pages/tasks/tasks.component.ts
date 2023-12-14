import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/core/interfaces/task.interface';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasksService = inject(TasksService)

  arrTasks: Task[] = []
  arrPriority: string[] = []

  reportSelected!: Task
  botonActivo: boolean = true;
  activatedRoute = inject(ActivatedRoute)
  constructionId: number = 0;
  userId: number = 0;

  ngOnInit() {
    this.arrTasks;
    this.activatedRoute.params.subscribe(async (params: any) => {
      this.constructionId = params.constructionId;
      this.userId = params.userId;
      const response = await this.tasksService.getTaskByCWId(this.userId, this.constructionId);
      this.arrTasks = response;


    })
  }




  //Aqui empiezan los fitros
  onChangePriority($event: any) {
  };
  onChangeDeadline($event: any) {
  };

  onChangeAssignmentDate($event: any) {
  };
}
