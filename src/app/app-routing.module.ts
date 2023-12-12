import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [

  { path: '', redirectTo: '/auth', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  {
    path: 'constructions',
    loadChildren: () => import('./modules/constructions/constructions.module').then(m => m.ConstructionsModule),
  },
  {
    path: 'workers',
    loadChildren: () => import('./modules/workers/workers.module').then(m => m.WorkersModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },

  { path: '**', redirectTo: '/home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
