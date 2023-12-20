import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { EpisComponent } from './shared/components/epis/epis.component';
import { OfficesComponent } from './shared/components/offices/offices.component';
import { NewsComponent } from './shared/components/news/news.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { AboutUsComponent } from './shared/components/about-us/about-us.component';
import { MapComponent } from './shared/components/map/map.component';
import { authGuard } from './core/guards/auth.guard';
import { ExtraComponent } from './shared/components/extra/extra.component';



const routes: Routes = [

  { path: '', redirectTo: '/auth', pathMatch: 'full' },

  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'map', component: MapComponent, canActivate: [authGuard] },
  { path: 'epis', component: EpisComponent, canActivate: [authGuard] },

  { path: 'offices', component: OfficesComponent, canActivate: [authGuard] },

  { path: 'news', component: NewsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'extra', component: ExtraComponent },


  {
    path: 'constructions',
    loadChildren: () => import('./modules/constructions/constructions.module').then(m => m.ConstructionsModule),
    canActivate: [authGuard]
  },
  {
    path: 'workers',
    loadChildren: () => import('./modules/workers/workers.module').then(m => m.WorkersModule),
    canActivate: [authGuard]
  },
  {
    path: 'reports',
    loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule),
    canActivate: [authGuard]
  },
  {
    path: 'tasks',
    loadChildren: () => import('./modules/tasks/tasks.module').then(m => m.TasksModule),
    canActivate: [authGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/error' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
