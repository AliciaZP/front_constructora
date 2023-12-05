import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EditWorkerComponent } from './pages/edit-worker/edit-worker.component';
import { NewWorkerComponent } from './pages/new-worker/new-worker.component';
import { WorkersComponent } from './pages/workers/workers.component';
import { WorkersRoutingModule } from './workers-routing.module';



@NgModule({
  declarations: [
    EditWorkerComponent,
    NewWorkerComponent,
    WorkersComponent
  ],
  imports: [
    CommonModule,
    WorkersRoutingModule,
    ReactiveFormsModule
  ]
})
export class WorkersModule { }
