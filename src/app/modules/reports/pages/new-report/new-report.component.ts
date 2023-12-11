import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReportsService } from 'src/app/core/services/reports.service';

@Component({
  selector: 'new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.css']
})
export class NewReportComponent {


  newReport: FormGroup;
  reportsService = inject(ReportsService)

  router = inject(Router)

  constructor() {
    this.newReport = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(45)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      date: new FormControl(null, Validators.required),
      type: new FormControl(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(45)]),

    })
  }

  onSubmit() {
    if (this.newReport.valid) {
      this.reportsService.createReport(this.newReport.value);
      this.router.navigate(['/reports']);
    } else {
      console.log('error');
    }
  };


  checkError(controlName: string, errorName: string) {
    return this.newReport.get(controlName)?.hasError(errorName) && this.newReport.get(controlName)?.touched;
  };


}
