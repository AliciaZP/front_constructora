import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as dayjs from 'dayjs';
import { Dayjs } from 'dayjs';
import { ConstructionsService } from 'src/app/core/services/constructions.service';

@Component({
  selector: 'edit-construction',
  templateUrl: './edit-construction.component.html',
  styleUrls: ['./edit-construction.component.css']
})
export class EditConstructionComponent {

  editConstruction: FormGroup;
  constructionId: number = 0;
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
      image: new FormControl(null, Validators.required),

    })
  }

  async ngOnInit() {
    try {

      this.activatedRoute.params.subscribe(async params => {
        this.constructionId = params['constructionId']

        const response = await this.constructionsService.getConstructionById(this.constructionId)

        // hay que pasarle un objeto con los mismo campos que definimos en el form group

        let { name, description, direction, city, assignment_date, deadline, phone, construction_type, work_time, image } = response;
        assignment_date = dayjs(assignment_date).format('YYYY-MM-DD')
        deadline = dayjs(deadline).format('YYYY-MM-DD')
        this.editConstruction.setValue({ name, description, direction, city, assignment_date, deadline, phone, construction_type, work_time, image })
      })
    } catch (error) {
      console.log(error)
    }
  }
  async onSubmit() {
    try {

        this.constructionsService.updateConstructionById(this.constructionId, this.editConstruction.value);
        this.router.navigate([`/constructions/construction/${this.constructionId}`])

    } catch (error) {
      console.log('error');
    }
  };


  checkError(controlName: string, errorName: string) {
    return this.editConstruction.get(controlName)?.hasError(errorName) && this.editConstruction.get(controlName)?.touched;
  };

}
