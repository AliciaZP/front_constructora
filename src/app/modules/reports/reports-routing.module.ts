import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './pages/reports/reports.component';
import { NewReportComponent } from './pages/new-report/new-report.component';

const routes: Routes = [
  { path: '', component: ReportsComponent },
  { path: 'new', component: NewReportComponent },
  { path: 'edit/:reportId', component: NewReportComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
