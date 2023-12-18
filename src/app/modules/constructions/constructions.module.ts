import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NewConstructionComponent } from './pages/new-construction/new-construction.component';
import { EditConstructionComponent } from './pages/edit-construction/edit-construction.component';
import { ConstructionsComponent } from './pages/constructions/constructions.component';
import { ConstructionsRoutingModule } from './constructions-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { IdConstructionComponent } from './pages/id-construction/id-construction.component';
import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [
    NewConstructionComponent,
    EditConstructionComponent,
    ConstructionsComponent,
    IdConstructionComponent,
  ],
  imports: [
    CommonModule,
    ConstructionsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    GoogleMapsModule
  ]
})
export class ConstructionsModule { }
