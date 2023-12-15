import { Component, inject } from '@angular/core';
import { User } from 'src/app/core/interfaces/user.interface';
import { UsersService } from 'src/app/core/services/users.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  usersService = inject(UsersService);
  userLogged!: User;

  async ngOnInit(){
    this.userLogged = await this.usersService.getUserLogged();
  }
}
