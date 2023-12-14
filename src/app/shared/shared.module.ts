import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { CardWorkersComponent } from './components/card-workers/card-workers.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { EpisComponent } from './components/epis/epis.component';
import { OfficesComponent } from './components/offices/offices.component';



@NgModule({
  declarations: [
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    ErrorComponent,
    CardWorkersComponent,
    SearchBarComponent,
    EpisComponent,
    OfficesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink

  ],
  exports: [
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    ErrorComponent,
    CardWorkersComponent,
    SearchBarComponent
  ]
})
export class SharedModule { }
