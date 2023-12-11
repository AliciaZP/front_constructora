import { Component, inject } from '@angular/core';
import { Report } from 'src/app/core/interfaces/report.interface';
import { ReportsService } from 'src/app/core/services/reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  reportsService = inject(ReportsService)

  arrReports: Report[] = []

  arrTypes: string[] = []
  botonActivo: boolean = true;

  ngOnInit() {
    this.arrReports = this.reportsService.getAll();
    this.arrTypes = this.reportsService.getTypes();

  }

  onClickDelete($event: string) {
    const response = this.reportsService.deleteReportById($event)
    this.arrReports = this.reportsService.getAll();
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

