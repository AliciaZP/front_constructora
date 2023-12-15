import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { TokenService } from 'src/app/core/services/token.service';
import { UsersService } from 'src/app/core/services/users.service';
import { WorkersService } from 'src/app/core/services/workers.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  newLogin: FormGroup;
  workersService = inject(WorkersService);
  userService = inject(UsersService);
  router = inject(Router);
  // tokenService = inject(TokenService);

  constructor() {
    this.newLogin = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })
  }

  async onSubmit() {
    try {
      const response = await this.userService.userLogin(this.newLogin.value)
      console.log(response);

      if(response.token){
        localStorage.setItem('token', response.token);
      }
      this.router.navigate(['/home'])
    } catch (error) {
      console.log(error)
    }
  }

  checkError(controlName: string, errorName: string) {
    return this.newLogin.get(controlName)?.hasError(errorName) && this.newLogin.get(controlName)?.touched;
  }


}
