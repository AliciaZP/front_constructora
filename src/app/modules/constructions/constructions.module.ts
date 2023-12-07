import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NewConstructionComponent } from './pages/new-construction/new-construction.component';
import { EditConstructionComponent } from './pages/edit-construction/edit-construction.component';
import { ConstructionsComponent } from './pages/constructions/constructions.component';
import { ConstructionsRoutingModule } from './constructions-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    NewConstructionComponent,
    EditConstructionComponent,
    ConstructionsComponent,
  ],
  imports: [
    CommonModule,
    ConstructionsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ConstructionsModule { }
