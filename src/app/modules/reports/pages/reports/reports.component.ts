import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Construction } from 'src/app/core/interfaces/construction.interfaces';
import { Report } from 'src/app/core/interfaces/report.interface';
import { ConstructionsService } from 'src/app/core/services/constructions.service';
import { ReportsService } from 'src/app/core/services/reports.service';

@Component({
  selector: 'reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {

  reportsService = inject(ReportsService)
  constructionsService = inject(ConstructionsService)

  arrReports!: any;
  arrTypes: string[] = []

  reportSelected!: Report
  botonActivo: boolean = true;
  activatedRoute = inject(ActivatedRoute)
  constructionId: number = 0;



  ngOnInit() {
    // this.arrReports = this.reportsService.getAll();



    this.activatedRoute.params.subscribe(async (params: any) => {
      this.constructionId = params.constructionId;
      const response = await this.constructionsService.getConstructionWithReports(params.constructionId);
      const { reports } = response;
      this.arrReports = reports;

      console.log(response.reports)
    })

  }

  //Aqui empiezan los fitros

  // onChangeType($event: any) {
  //   this.arrReports = $event.target.value === "" ? this.reportsService.getAll() : this.reportsService.filterByType($event.target.value);
  // };


  // onChangeDate($event: any) {
  //   const ascendente = $event.target.value === "reciente";
  //   this.arrReports = this.reportsService.orderByDate(ascendente);
  // };

}

