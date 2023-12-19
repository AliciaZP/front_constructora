import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TasksRoutingModule } from './tasks-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AllTasksComponent } from './pages/all-tasks/all-tasks.component';



@NgModule({
  declarations: [
    AllTasksComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TasksRoutingModule,
    SharedModule
  ]
})
export class TasksModule { }
