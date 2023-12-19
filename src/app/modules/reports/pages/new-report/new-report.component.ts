import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportsService } from 'src/app/core/services/reports.service';
import Swal from 'sweetalert2';

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
  location = inject(Location);

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.constructionId = parseInt(params.constructionId);
    });
    console.log(this.constructionId)
    this.newReport.get('Constructions_id')?.setValue(this.constructionId)
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

  goBack() {
    this.location.back();
  }

  async onSubmit() {
    if (this.newReport.valid) {
      await this.reportsService.createReport(this.newReport.value);
      Swal.fire({
        icon: 'success',
        title: 'Reporte creado correctamente',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#008000',
        color: 'white',
        background: '#0f0f0f',
      }).then(() => {
        this.router.navigate(['/constructions', 'construction', 'reports', this.constructionId])
      });
    } else {
      console.log('error');
      Swal.fire({
        icon: 'error',
        title: 'Datos erróneos',
        text: 'Por favor, completa todos los campos del reporte de forma correcta.',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#af1e2d',
        color: 'white',
        background: '#0f0f0f',
      });
    }
  }

  checkError(controlName: string, errorName: string) {
    return this.newReport.get(controlName)?.hasError(errorName) && this.newReport.get(controlName)?.touched;
  };

}
