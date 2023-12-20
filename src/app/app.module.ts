import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { ReportsComponent } from './modules/reports/pages/reports/reports.component';
import { EditReportComponent } from './modules/reports/pages/edit-report/edit-report.component';
import { TasksComponent } from './modules/tasks/pages/tasks/tasks.component';
import { NewTaskComponent } from './modules/tasks/pages/new-task/new-task.component';
import { EditTaskComponent } from './modules/tasks/pages/edit-task/edit-task.component';
import { AuthTokenInterceptor } from './core/interceptors/auth-token.interceptor';
import { GoogleMapsModule } from '@angular/google-maps';




@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    EditReportComponent,
    TasksComponent,
    NewTaskComponent,
    EditTaskComponent,


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    GoogleMapsModule
  ]
})
export class AppModule { }
