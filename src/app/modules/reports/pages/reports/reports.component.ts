import { Location } from '@angular/common';
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
  constructionsService = inject(ConstructionsService);
  location = inject(Location);

  arrReports!: any[];
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
      this.arrReports = reports!;

    })

  }

  goBack(){
    this.location.back();
  }

  // getTypes() {
  //   const reportsUnordered = [...new Set(this.arrReports.map(report => report.type))];
  //   const reportsOrdered = reportsUnordered.sort((a, b) => a.localeCompare(b));
  //   return reportsOrdered;
  // }

  // filterByType(pType: string) {
  //   return this.arrReports.filter(construction => construction.type === pType)
  // }

  //Aqui empiezan los fitros

  async onChangeType($event: any) {
    try {
      if(!$event.target.value){
        const response = await this.constructionsService.getConstructionWithReports(this.constructionId);
        const { reports } = response;
        this.arrReports = reports!
      }else{
        const response = await this.reportsService.getReportsByType( $event.target.value, this.constructionId );
        this.arrReports = response;

      }
    } catch (error) {
      console.log(error);
    }
  };


  async onChangeDate($event: any) {
    try {
      const response = await this.reportsService.getReportsOrderedByDate( $event.target.value, this.constructionId );
      this.arrReports = response;
    } catch (error) {
      console.log(error);
    }
  };

}

