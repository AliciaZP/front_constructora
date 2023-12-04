import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ObrasComponent } from './pages/obras/obras.component';
import { EditObraComponent } from './pages/edit-obra/edit-obra.component';
import { OperariosComponent } from './pages/operarios/operarios.component';
import { EditOperarioComponent } from './pages/edit-operario/edit-operario.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ErrorComponent } from './pages/error/error.component';
import { NuevaObraComponent } from './pages/nueva-obra/nueva-obra.component';
import { NuevoOperarioComponent } from './pages/nuevo-operario/nuevo-operario.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'home', component: HomeComponent },
  { path: 'obras', component: ObrasComponent },
  { path: 'obras/nuevo/', component: NuevaObraComponent },
  { path: 'obras/edit/:obraId', component: EditObraComponent },
  { path: 'operarios', component: OperariosComponent },
  { path: 'operarios/nuevo/', component: NuevoOperarioComponent },
  { path: 'operarios/edit/:operarioId', component: EditOperarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/login' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
