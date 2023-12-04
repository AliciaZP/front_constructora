import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConstructionsComponent } from './pages/constructions/constructions.component';
import { EditConstructionComponent } from './pages/edit-construction/edit-construction.component';
import { WorkersComponent } from './pages/workers/workers.component';
import { EditWorkerComponent } from './pages/edit-worker/edit-worker.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ErrorComponent } from './pages/error/error.component';
import { NewConstructionComponent } from './pages/new-construction/new-construction.component';
import { NewWorkerComponent } from './pages/new-worker/new-worker.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'home', component: HomeComponent },
  { path: 'constructions', component: ConstructionsComponent },
  { path: 'constructions/new/', component: NewConstructionComponent },
  { path: 'constructions/edit/:constructionId', component: EditConstructionComponent },
  { path: 'workers', component: WorkersComponent },
  { path: 'workers/new/', component: NewWorkerComponent },
  { path: 'workers/edit/:workerId', component: EditWorkerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/login' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
