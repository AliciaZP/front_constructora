import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/core/interfaces/task.interface';
import { TasksService } from 'src/app/core/services/tasks.service';
import { WorkersService } from 'src/app/core/services/workers.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent {

  tasksService = inject(TasksService);
  workersService = inject(WorkersService);

  arrTasks: Task[] = []
  arrPriority: string[] = []
  worker!: any;

  reportSelected!: Task
  botonActivo: boolean = true;
  activatedRoute = inject(ActivatedRoute)
  constructionId: number = 0;
  userId: string = '';

  ngOnInit() {
    this.arrTasks;
    this.activatedRoute.params.subscribe(async (params: any) => {
      this.userId = params.userId;
      const response = await this.tasksService.getAll(this.userId);
      const user = await this.workersService.getWorkerById(this.userId)
      this.arrTasks = response;
      this.worker = user
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
