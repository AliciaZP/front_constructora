import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportsService } from 'src/app/core/services/reports.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'edit-report',
  templateUrl: './edit-report.component.html',
  styleUrls: ['./edit-report.component.css']
})
export class EditReportComponent {

  editReport: FormGroup;
  reportId: string = '';
  reportsService = inject(ReportsService)
  location = inject(Location);
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

  goBack() {
    this.location.back();
  }

  async onSubmit() {
    if (this.editReport.valid) {
      try {
        this.reportsService.updateReportById(this.reportId, this.editReport.value);
        Swal.fire({
          icon: 'success',
          title: 'Reporte editado correctamente',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#008000',
          color: 'white',
          background: '#0f0f0f',
        }).then(() => {
          this.router.navigate([`/constructions`]);
          /*       this.router.navigate([`/constructions/construction/reports/${this.constructionId}`]) */
        });
      } catch (error) {
        console.log('error');
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Datos editados erróneos',
        text: 'Por favor, completa todos los campos del reporte de forma correcta.',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#af1e2d',
        color: 'white',
        background: '#0f0f0f',
      });
    }
  }

  checkError(controlName: string, errorName: string) {
    return this.editReport.get(controlName)?.hasError(errorName) && this.editReport.get(controlName)?.touched;
  };
}
