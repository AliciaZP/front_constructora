import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ConstructionsService } from 'src/app/core/services/constructions.service';

@Component({
  selector: 'new-construction',
  templateUrl: './new-construction.component.html',
  styleUrls: ['./new-construction.component.css']
})
export class NewConstructionComponent {

  newConstruction: FormGroup;
  constructionsService = inject(ConstructionsService)

  router = inject(Router)

  constructor() {
    this.newConstruction = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(45)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      direction: new FormControl(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(150)]),
      city: new FormControl(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(70)]),
      assignment_date: new FormControl(null, Validators.required),
      deadline: new FormControl(null, Validators.required),
      phone: new FormControl(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(12)]),
      construction_type: new FormControl(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(45)]),
      work_time: new FormControl(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(150)]),
      image: new FormControl(null, Validators.required),
    })
  }

  onSubmit() {
    if (this.newConstruction.valid) {
      this.constructionsService.createConstruction(this.newConstruction.value);
      this.router.navigate(['/constructions']);
    } else {
      console.log('error');
    }
  };


  checkError(controlName: string, errorName: string) {
    return this.newConstruction.get(controlName)?.hasError(errorName) && this.newConstruction.get(controlName)?.touched;
  };


}
