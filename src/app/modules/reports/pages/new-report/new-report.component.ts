import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportsService } from 'src/app/core/services/reports.service';

@Component({
  selector: 'new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.css']
})
export class NewReportComponent {

  activatedRoute = inject(ActivatedRoute)
  newReport: FormGroup;
  reportsService = inject(ReportsService)
  constructionId: number = 0;
  router = inject(Router)

  ngOnInit(){
    this.activatedRoute.params.subscribe((params: any) => {
      this.constructionId = parseInt(params.constructionId);
    });
    console.log(this.constructionId)
    this.newReport.get('Constructions_id')?.setValue( this.constructionId)
  }
  constructor() {

    this.newReport = new FormGroup({

      title: new FormControl(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(70)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      date: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      Constructions_id: new FormControl()
    })
  }


  async onSubmit() {
    try {
      console.log(this.newReport.value)
      const response = await this.reportsService.createReport(this.newReport.value);
      console.log(response)
      this.router.navigate(['/constructions', 'construction', 'reports', this.constructionId])
    } catch (error) {
      console.log({error: error})
    }

    // if (this.newReport.valid) {
    //   this.reportsService.createReport(this.newReport.value);
    //   this.router.navigate(['/constructions', 'construction']);
    // } else {
    //   console.log('error');
    // }


  };


  checkError(controlName: string, errorName: string) {
    return this.newReport.get(controlName)?.hasError(errorName) && this.newReport.get(controlName)?.touched;
  };


}
