import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkersService } from 'src/app/core/services/workers.service';

@Component({
  selector: 'new-worker',
  templateUrl: './new-worker.component.html',
  styleUrls: ['./new-worker.component.css']
})
export class NewWorkerComponent {

  newWorker: FormGroup;
  workersService = inject(WorkersService)

  router = inject(Router)

  constructor() {
    this.newWorker = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(45)]),
      surname: new FormControl(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(70)]),
      dni: new FormControl(null, [Validators.required, this.dniValidator]),
      phone: new FormControl(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(12)]),
      email: new FormControl(null, [Validators.required, Validators.pattern(/^[\w.-]+@[\w.-]+.[\w.-]+$/)]),
      password: new FormControl(null, [Validators.required, this.passwordValidator]),
      role: new FormControl(null, Validators.required),
      active: new FormControl(null, Validators.required),
      job: new FormControl(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(70)]),
      city: new FormControl(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(45)]),
      image: new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    if (this.newWorker.valid) {
      this.workersService.createWorker(this.newWorker.value);
      this.router.navigate(['/workers']);
    } else {
      console.log('error');
    }
  };


  checkError(controlName: string, errorName: string) {
    return this.newWorker.get(controlName)?.hasError(errorName) && this.newWorker.get(controlName)?.touched;
  };


  dniValidator(control: AbstractControl) {
    const value = control.value;
    const letrasAceptadas = 'TRWAGMYFPDXBNJZSQVHLCKET';

    if (/^\d{8}[a-zA-Z]$/.test(value)) {
      const numero = value.substring(0, value.length - 1); //sacar numero sin letra
      const letra = value.substring(value.length - 1, value.length)//Si quiero que se admita letra minuscula le meto .toUpperCase(); //sacar letra
      const resto = numero % 23; //sacar el resto
      const letraSeleccionada = letrasAceptadas.at(resto) //buscar la posicion de la letra

      if (letra != letraSeleccionada!.toUpperCase()) {
        return { dnivalidator: 'Dni erroneo, la letra del NIF no se corresponde' }
      } else {
        return null //('Dni correcto');
      }
    } else {
      return { dnivalidator: 'Dni erroneo, formato no válido' }
    }
  }


  passwordValidator(control: AbstractControl) {
    const value = control.value;

    if (!value) {
      return null;
    }

    const incluyeMayus = /[A-Z]/.test(value);
    const incluyeNum = /\d/.test(value);
    const incluyeSimbol = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const longitudValida = value.length <= 20;

    const passwordValida = incluyeMayus && incluyeNum && incluyeSimbol && longitudValida;
    return passwordValida ? null : { passwordvalidator: true };
  }
}
