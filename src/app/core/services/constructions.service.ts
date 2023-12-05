import { Injectable } from '@angular/core';
import { Construction } from '../interfaces/construction.interfaces';
import { ConstructionsDB } from 'src/app/db/constructions.db';

@Injectable({
  providedIn: 'root'
})
export class ConstructionsService {

  constructor() { }
  //Las CONSTRUCTIONS son una base de datos creada el front para probar, como los import no se pueden editar. Creo un array editable y trabajo sobre él a partir de la copia de CONSTRUCTIONSDB
  private arrConstruction: Construction[] = [...ConstructionsDB];

  getAll() {
    return this.arrConstruction;
  }

  getConstructionById(constructionId: string): Construction {
    const constructionFound = this.arrConstruction.find(construction => construction._id === constructionId);
    return constructionFound ? { ...constructionFound } : { _id: "", name: "", description: "", direction: "", city: "", assignment_date: new Date(), deadline: new Date(), phone: "", construction_type: "", work_time: "" }
  };

  createConstruction(pConstruction: Construction) {
    const constructionsDB = localStorage.getItem('array_newConstructions');
    if (constructionsDB) {
      this.arrConstruction = JSON.parse(constructionsDB);
    }
    this.arrConstruction.push(pConstruction);
    localStorage.setItem('array_newConstructions', JSON.stringify(this.arrConstruction));
  }

  updateConstructionById(constructionId: string, formUpdate: Construction): void {
    const constructionIndex = this.arrConstruction.findIndex(construction => construction._id === constructionId);

    if (constructionIndex !== -1) {
      this.arrConstruction[constructionIndex] = { ...this.arrConstruction[constructionIndex], ...formUpdate };
    }
  }

  deleteConstructionById(constructionId: string): void {
    this.arrConstruction = this.arrConstruction.filter(construction => construction._id !== constructionId);
  }

  //Funciones para las ciudades
  getCities(): string[] {
    const constructionsUnordered = [...new Set(this.arrConstruction.map(construction => construction.city))];
    const constructionsOrdered = constructionsUnordered.sort((a, b) => a.localeCompare(b));
    return constructionsOrdered;
  }

  filterByCity(pCity: string): Construction[] {
    return this.arrConstruction.filter(construction => construction.city === pCity)
  }

  //Funciones para los tipos de construccion
  getConstructionTypes(): string[] {
    const constructionsUnordered = [...new Set(this.arrConstruction.map(construction => construction.construction_type))];
    const constructionsOrdered = constructionsUnordered.sort((a, b) => a.localeCompare(b));
    return constructionsOrdered;
  }

  filterByConstructionType(pConstructionType: string): Construction[] {
    return this.arrConstruction.filter(construction => construction.construction_type === pConstructionType)
  }

  //Funciones para los filtros de ordenacion

  orderByName(ascendente: boolean): Construction[] {
    // Ordenar y devolver una nueva lista sin modificar la original
    return this.arrConstruction.slice().sort((a, b) => {
      const comparacion = a.name.localeCompare(b.name);
      return ascendente ? comparacion : -comparacion;
    });
  }

  //el metodo local compare no funciona con el tipo date, asi que hay que usar esta funcion
  orderByAssignmentDate(ascendente: boolean) {
    return this.arrConstruction.slice().sort((a, b) => {
      const fechaA = new Date(a.assignment_date).getTime();
      const fechaB = new Date(b.assignment_date).getTime();
      return ascendente ? fechaB - fechaA : fechaA - fechaB;
    });
  }
  //el metodo local compare no funciona con el tipo date, asi que hay que usar esta funcion
  orderByDeadline(ascendente: boolean) {
    return this.arrConstruction.slice().sort((a, b) => {
      const fechaA = new Date(a.deadline).getTime();
      const fechaB = new Date(b.deadline).getTime();
      return ascendente ? fechaB - fechaA : fechaA - fechaB;
    });
  }


};


