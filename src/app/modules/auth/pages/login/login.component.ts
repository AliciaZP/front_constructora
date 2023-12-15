import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  newLogin: FormGroup;
  router = inject(Router)
  passwordVisible = false;
  password = '';


  constructor() {
    this.newLogin = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })
  }
  /* 
    onSubmit() {
      const loginCorrecto = this.usuariosService.loginUsuario(this.newLogin.value);
  
      if (loginCorrecto) {
        this.router.navigate(['/home']);
      } else {
        console.log('error');
      }
    }
   */
  checkError(controlName: string, errorName: string) {
    return this.newLogin.get(controlName)?.hasError(errorName) && this.newLogin.get(controlName)?.touched;
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}


