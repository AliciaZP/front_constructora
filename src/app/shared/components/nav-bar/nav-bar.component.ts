import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/interfaces/user.interface';
import { UsersService } from 'src/app/core/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  usersService = inject(UsersService);
  userLogged!: User;
  router = inject(Router);

  async ngOnInit(){
    this.userLogged = await this.usersService.getUserLogged();
  }

  async onClickLogoff(){
    const result = await Swal.fire({
      title: "Cerrar sesion",
      text: "¿Estás seguro que quieres cerrar sesion?",
      icon: "warning",
      color: 'white',
      background: '#0f0f0f',
      showCancelButton: true,
      confirmButtonColor: "#af1e2d",
      cancelButtonColor: "#a3a8a3",
      confirmButtonText: "Cerrar sesion",
      cancelButtonText: "Cancelar",
    });
    if (result.isConfirmed) {
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);

  }
}
}
