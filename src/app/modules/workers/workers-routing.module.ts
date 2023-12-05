import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WorkersComponent } from './pages/workers/workers.component';
import { NewWorkerComponent } from './pages/new-worker/new-worker.component';
import { EditWorkerComponent } from './pages/edit-worker/edit-worker.component';

const routes: Routes = [
  { path: '', component: WorkersComponent },
  { path: 'new', component: NewWorkerComponent },
  { path: 'edit/:workerId', component: EditWorkerComponent }


]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class WorkersRoutingModule { }
