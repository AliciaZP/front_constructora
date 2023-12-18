import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConstructionsComponent } from './pages/constructions/constructions.component';
import { NewConstructionComponent } from './pages/new-construction/new-construction.component';
import { EditConstructionComponent } from './pages/edit-construction/edit-construction.component';
import { IdConstructionComponent } from './pages/id-construction/id-construction.component';
import { ReportsComponent } from '../reports/pages/reports/reports.component';

const routes: Routes = [
  { path: '', component: ConstructionsComponent },
  { path: 'construction/:constructionId', component: IdConstructionComponent },
  { path: 'construction/reports/:constructionId', component: ReportsComponent },
  { path: 'new', component: NewConstructionComponent },
  { path: 'edit/:constructionId', component: EditConstructionComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ConstructionsRoutingModule { }
