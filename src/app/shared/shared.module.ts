import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { CardWorkersComponent } from './components/card-workers/card-workers.component';



@NgModule({
  declarations: [
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    ErrorComponent,
    CardWorkersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    ErrorComponent,
    CardWorkersComponent
  ]
})
export class SharedModule { }
