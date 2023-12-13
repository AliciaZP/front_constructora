import { Injectable, inject } from '@angular/core';
import { Report } from '../interfaces/report.interface';
// import { ReportsDB } from 'src/app/db/reports.db';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  HttpClient = inject(HttpClient);
  url: string = 'http://localhost:3000/api/reports';
  constructor() { }
  //Las CONSTRUCTIONS son una base de datos creada el front para probar, como los import no se pueden editar. Creo un array editable y trabajo sobre él a partir de la copia de CONSTRUCTIONSDB
  // private arrReports: Report[] = [...ReportsDB]

  // getAll() {
  //   return this.arrReports;
  // }

  getReportById(reportId: string) {
    return firstValueFrom(
      this.HttpClient.get<Report>(`${this.url}/${reportId}`)
    )
  };

  createReport(pReport: Report) {
    console.log(pReport)
    return firstValueFrom(
      this.HttpClient.post<Report>(`${this.url}/new`, pReport)
    );
  }

  updateReportById(reportId: string, formUpdate: Report) {
    return firstValueFrom(
      this.HttpClient.put<Report>(`${this.url}/${reportId}`, formUpdate)
    )
  }

  //Funciones para las ciudades
  // getTypes(): string[] {
  //   const reportsUnordered = [...new Set(this.arrReports.map(report => report.type))];
  //   const reportsOrdered = reportsUnordered.sort((a, b) => a.localeCompare(b));
  //   return reportsOrdered;
  // }

  // filterByType(pType: string): Report[] {
  //   return this.arrReports.filter(construction => construction.type === pType)
  // }



  // //Funciones para los filtros de ordenacion


  // //el metodo local compare no funciona con el tipo date, asi que hay que usar esta funcion
  // orderByDate(ascendente: boolean) {
  //   return this.arrReports.slice().sort((a, b) => {
  //     const fechaA = new Date(a.date).getTime();
  //     const fechaB = new Date(b.date).getTime();
  //     return ascendente ? fechaB - fechaA : fechaA - fechaB;
  //   });
  // }

}
