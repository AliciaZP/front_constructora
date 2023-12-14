import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front_constructora';

  router = inject(Router)

  isAuthRoute(): boolean {
    //Con esto obtenemos la ruta actual en la que estamos.
    const currentRoute = this.router.url;

    // Confirma que la ruta es la que se llama así:
    return currentRoute === '/auth';
  }



}
