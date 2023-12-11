import { Injectable } from '@angular/core';
import { Report } from '../interfaces/report.interface';
import { ReportsDB } from 'src/app/db/reports.db';


@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor() { }
  //Las CONSTRUCTIONS son una base de datos creada el front para probar, como los import no se pueden editar. Creo un array editable y trabajo sobre él a partir de la copia de CONSTRUCTIONSDB
  private arrReports: Report[] = [...ReportsDB]

  getAll() {
    return this.arrReports;
  }

  getReportById(reportId: string): Report {
    const reportFound = this.arrReports.find(report => report._id === reportId);
    return reportFound ? { ...reportFound } : { _id: "", title: "", date: new Date(), description: "", type: "", }
  };

  createReport(pReport: Report) {
    const ReportsDB = localStorage.getItem('array_newReports');
    if (ReportsDB) {
      this.arrReports = JSON.parse(ReportsDB);
    }
    this.arrReports.push(pReport);
    localStorage.setItem('array_newReports', JSON.stringify(this.arrReports));
  }

  updateReportById(reportId: string, formUpdate: Report): void {
    const reportIndex = this.arrReports.findIndex(report => report._id === reportId);

    if (reportIndex !== -1) {
      this.arrReports[reportIndex] = { ...this.arrReports[reportIndex], ...formUpdate };
    }
  }

  //Funciones para las ciudades
  getTypes(): string[] {
    const reportsUnordered = [...new Set(this.arrReports.map(report => report.type))];
    const reportsOrdered = reportsUnordered.sort((a, b) => a.localeCompare(b));
    return reportsOrdered;
  }

  filterByType(pType: string): Report[] {
    return this.arrReports.filter(construction => construction.type === pType)
  }



  //Funciones para los filtros de ordenacion


  //el metodo local compare no funciona con el tipo date, asi que hay que usar esta funcion
  orderByDate(ascendente: boolean) {
    return this.arrReports.slice().sort((a, b) => {
      const fechaA = new Date(a.date).getTime();
      const fechaB = new Date(b.date).getTime();
      return ascendente ? fechaB - fechaA : fechaA - fechaB;
    });
  }

}