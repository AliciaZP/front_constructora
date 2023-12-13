import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportsService } from 'src/app/core/services/reports.service';

@Component({
  selector: 'edit-report',
  templateUrl: './edit-report.component.html',
  styleUrls: ['./edit-report.component.css']
})
export class EditReportComponent {

  editReport: FormGroup;
  reportId: string = '';
  reportsService = inject(ReportsService)

  router = inject(Router)
  activatedRoute = inject(ActivatedRoute)

  constructor() {
    this.editReport = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(45)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      date: new FormControl(null, Validators.required),
      type: new FormControl(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(45)]),

    })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      this.reportId = params['reportId']
      console.log(this.reportId)
      const response = await this.reportsService.getReportById(this.reportId)
      //hay que pasarle un objeto con los mismo campos que definimos en el form group
      const { title, description, date, type } = response
      this.editReport.setValue({ title, description, date, type })
    })


  }
  async onSubmit() {
    try {
      if (this.editReport.valid) {
        this.reportsService.updateReportById(this.reportId, this.editReport.value);
        this.router.navigate([`/reports`]);
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log(error)
    }
  };


  checkError(controlName: string, errorName: string) {
    return this.editReport.get(controlName)?.hasError(errorName) && this.editReport.get(controlName)?.touched;
  };
}
