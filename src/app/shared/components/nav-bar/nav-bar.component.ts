import { Component, inject } from '@angular/core';
import { User } from 'src/app/core/interfaces/user.interface';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  usersService = inject(UsersService);
  userLogged!: User;

  async ngOnInit(){
    this.userLogged = await this.usersService.getUserLogged();
  }
}
