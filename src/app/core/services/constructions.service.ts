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

  getCities() { }
  filterByCity() { }

  getConstructionTypes() { }
  filterByConstructionType() { }

  orderByName() { }

  orderByAssignmentDate() { }

  orderByDeadline() { }

};


