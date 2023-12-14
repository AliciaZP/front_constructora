import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './pages/tasks/tasks.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { AllTasksComponent } from './pages/all-tasks/all-tasks.component';

const routes: Routes = [
  { path: 'task/:userId/:constructionId', component: TasksComponent },
  { path: 'user/task/:userId', component: AllTasksComponent },
  { path: 'new/:userId/:constructionId', component: NewTaskComponent },
  { path: 'edit/:taskId/:userId/:constructionId', component: EditTaskComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
