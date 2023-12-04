import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './pages/error/error.component';
import { ObrasComponent } from './pages/obras/obras.component';
import { OperariosComponent } from './pages/operarios/operarios.component';
import { NuevaObraComponent } from './pages/nueva-obra/nueva-obra.component';
import { EditObraComponent } from './pages/edit-obra/edit-obra.component';
import { NuevoOperarioComponent } from './pages/nuevo-operario/nuevo-operario.component';
import { EditOperarioComponent } from './pages/edit-operario/edit-operario.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NavBarComponent,
    FooterComponent,
    ErrorComponent,
    ObrasComponent,
    OperariosComponent,
    NuevaObraComponent,
    EditObraComponent,
    NuevoOperarioComponent,
    EditOperarioComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
