import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

}
