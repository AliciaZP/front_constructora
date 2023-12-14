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


  ngOnInit() {
    this.arrTasks = this.tasksService.getAll();
  }

  //Aqui empiezan los fitros
  onChangePriority($event: any) {
  };
  onChangeDeadline($event: any) {
  };

  onChangeAssignmentDate($event: any) {
  };
}
