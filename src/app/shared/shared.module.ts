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
import { NewsComponent } from './components/news/news.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MapComponent } from './components/map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CardMapComponent } from './components/card-map/card-map.component';
import { SemaforoComponent } from './components/semaforo/semaforo.component';
import { ExtraComponent } from './components/extra/extra.component';



@NgModule({
  declarations: [
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    ErrorComponent,
    CardWorkersComponent,
    SearchBarComponent,
    EpisComponent,
    OfficesComponent,
    NewsComponent,
    CalendarComponent,
    AboutUsComponent,
    MapComponent,
    CardMapComponent,
    SemaforoComponent,
    ExtraComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink,
    GoogleMapsModule,

  ],
  exports: [
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    ErrorComponent,
    CardWorkersComponent,
    SearchBarComponent,
    MapComponent,
    CardMapComponent

  ]
})
export class SharedModule { }
