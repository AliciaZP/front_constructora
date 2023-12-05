import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstructionsService } from 'src/app/core/services/constructions.service';

@Component({
  selector: 'edit-construction',
  templateUrl: './edit-construction.component.html',
  styleUrls: ['./edit-construction.component.css']
})
export class EditConstructionComponent {

  editConstruction: FormGroup;
  constructionId: string = '';
  constructionsService = inject(ConstructionsService)

  router = inject(Router)
  activatedRoute = inject(ActivatedRoute)

  constructor() {
    this.editConstruction = new FormGroup({
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
    })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.constructionId = params['constructionId']
      const response = this.constructionsService.getConstructionById(this.constructionId)
      //hay que pasarle un objeto con los mismo campos que definimos en el form group
      const { name, description, direction, city, assignment_date, deadline, phone, construction_type, work_time } = response
      this.editConstruction.setValue({ name, description, direction, city, assignment_date, deadline, phone, construction_type, work_time })
    })
  }
  onSubmit() {
    if (this.editConstruction.valid) {
      this.constructionsService.updateConstructionById(this.constructionId, this.editConstruction.value);
      this.router.navigate(['/constructions']);
    } else {
      console.log('error');
    }
  };


  checkError(controlName: string, errorName: string) {
    return this.editConstruction.get(controlName)?.hasError(errorName) && this.editConstruction.get(controlName)?.touched;
  };

}
