import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { ReportsComponent } from './modules/reports/pages/reports/reports.component';
import { EditReportComponent } from './modules/reports/pages/edit-report/edit-report.component';




@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    EditReportComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class AppModule { }
