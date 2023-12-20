import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { EpisComponent } from './shared/components/epis/epis.component';
import { OfficesComponent } from './shared/components/offices/offices.component';
import { NewsComponent } from './shared/components/news/news.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { AboutUsComponent } from './shared/components/about-us/about-us.component';
import { MapComponent } from './shared/components/map/map.component';
import { ExtraComponent } from './shared/components/extra/extra.component';



const routes: Routes = [

  { path: '', redirectTo: '/auth', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'epis', component: EpisComponent },

  { path: 'offices', component: OfficesComponent },

  { path: 'news', component: NewsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'extra', component: ExtraComponent },


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
    path: 'tasks',
    loadChildren: () => import('./modules/tasks/tasks.module').then(m => m.TasksModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
