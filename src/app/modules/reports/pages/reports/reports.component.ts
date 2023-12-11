import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Report } from 'src/app/core/interfaces/report.interface';
import { ReportsService } from 'src/app/core/services/reports.service';

@Component({
  selector: 'reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {

  reportsService = inject(ReportsService)

  arrReports: Report[] = []
  arrTypes: string[] = []

  reportSelected!: Report
  botonActivo: boolean = true;
  activatedRoute = inject(ActivatedRoute)


  ngOnInit() {
    this.arrReports = this.reportsService.getAll();
    this.arrTypes = this.reportsService.getTypes();


    this.activatedRoute.params.subscribe((params) => {

      const response = this.reportsService.getReportById(params['reportId']);
      this.reportSelected = response
    })
  }

  //Aqui empiezan los fitros

  onChangeType($event: any) {
    this.arrReports = $event.target.value === "" ? this.reportsService.getAll() : this.reportsService.filterByType($event.target.value);
  };


  onChangeAssignmentDate($event: any) {
    const ascendente = $event.target.value === "reciente";
    this.arrReports = this.reportsService.orderByDate(ascendente);
  };

}

