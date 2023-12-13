import { Injectable, OnInit, inject } from '@angular/core';

import { ConstructionsDB } from 'src/app/db/constructions.db';
import { Construction } from '../interfaces/construction.interfaces';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConstructionsService implements OnInit{
  url: string = 'http://localhost:3000/api/constructions'
  private httpClient = inject(HttpClient);
  private arrConstruction: Construction[] = [];

  constructor() { }

  getAllConstructions(){
    return firstValueFrom(
      this.httpClient.get<Construction[]>(`${this.url}`)
    )
  }

  getConstructionById(id: number){
    return firstValueFrom(
      this.httpClient.get<Construction>(`${this.url}/${id}`)
    )
  }

  getConstructionWithReports(id: number){
    return firstValueFrom(
      this.httpClient.get<Construction>(`${this.url}/reports/${id}`)
      );
    }


  createNewConstruction(body: Construction){
    return firstValueFrom(
      this.httpClient.post<Construction>(`${this.url}/new`, body)
    );
  }

    // createConstruction(pConstruction: Construction) {
    //   const constructionsDB = localStorage.getItem('array_newConstructions');
    //   if (constructionsDB) {
    //     this.arrConstruction = JSON.parse(constructionsDB);
    //   }
    //   this.arrConstruction.push(pConstruction);
    //   localStorage.setItem('array_newConstructions', JSON.stringify(this.arrConstruction));
    // }
  ngOnInit(): void {

  }


  //Las CONSTRUCTIONS son una base de datos creada el front para probar, como los import no se pueden editar. Creo un array editable y trabajo sobre él a partir de la copia de CONSTRUCTIONSDB
  // private arrConstruction: Construction[] = [...ConstructionsDB];

  // getAll() {
  //   return this.arrConstruction;
  // }

  // getConstructionById(constructionId: string): Construction {
  //   const constructionFound = this.arrConstruction.find(construction => construction._id === constructionId);
  //   return constructionFound ? { ...constructionFound } : { _id: "", name: "", description: "", direction: "", city: "", assignment_date: new Date(), deadline: new Date(), phone: "", construction_type: "", work_time: "", image: "" }
  // };


  // updateConstructionById(constructionId: string, formUpdate: Construction): void {
  //   const constructionIndex = this.arrConstruction.findIndex(construction => construction._id === constructionId);

  //   if (constructionIndex !== -1) {
  //     this.arrConstruction[constructionIndex] = { ...this.arrConstruction[constructionIndex], ...formUpdate };
  //   }
  // }

  // deleteConstructionById(constructionId: string): void {
  //   this.arrConstruction = this.arrConstruction.filter(construction => construction._id !== constructionId);
  // }

  // //Funciones para las ciudades


  // //Funciones para los tipos de construccion
  // getConstructionTypes(): string[] {
  //   const constructionsUnordered = [...new Set(this.arrConstruction.map(construction => construction.construction_type))];
  //   const constructionsOrdered = constructionsUnordered.sort((a, b) => a.localeCompare(b));
  //   return constructionsOrdered;
  // }

  // filterByConstructionType(pConstructionType: string): Construction[] {
  //   return this.arrConstruction.filter(construction => construction.construction_type === pConstructionType)
  // }

  // //Funciones para los filtros de ordenacion

  // orderByName(ascendente: boolean): Construction[] {
  //   // Ordenar y devolver una nueva lista sin modificar la original
  //   return this.arrConstruction.slice().sort((a, b) => {
  //     const comparacion = a.name.localeCompare(b.name);
  //     return ascendente ? comparacion : -comparacion;
  //   });
  // }

  // //el metodo local compare no funciona con el tipo date, asi que hay que usar esta funcion
  // orderByAssignmentDate(ascendente: boolean) {
  //   return this.arrConstruction.slice().sort((a, b) => {
  //     const fechaA = new Date(a.assignment_date).getTime();
  //     const fechaB = new Date(b.assignment_date).getTime();
  //     return ascendente ? fechaB - fechaA : fechaA - fechaB;
  //   });
  // }
  // //el metodo local compare no funciona con el tipo date, asi que hay que usar esta funcion
  // orderByDeadline(ascendente: boolean) {
  //   return this.arrConstruction.slice().sort((a, b) => {
  //     const fechaA = new Date(a.deadline).getTime();
  //     const fechaB = new Date(b.deadline).getTime();
  //     return ascendente ? fechaB - fechaA : fechaA - fechaB;
  //   });
  // }


};


