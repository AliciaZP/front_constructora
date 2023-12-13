import { Component, OnInit, inject } from '@angular/core';
import { Construction } from 'src/app/core/interfaces/construction.interfaces';
import { ConstructionsService } from 'src/app/core/services/constructions.service';

@Component({
  selector: 'constructions',
  templateUrl: './constructions.component.html',
  styleUrls: ['./constructions.component.css']
})
export class ConstructionsComponent implements OnInit {

  arrConstructions!: Construction[];

  constructionsService = inject(ConstructionsService)
  botonActivo: boolean = true;
  arrCities: any[] = []

  constructor(){}






  // arrConstructionTypes: string[] = []


  async ngOnInit() {
    this.arrConstructions = await this.constructionsService.getAllConstructions();
    console.log(this.arrConstructions)
      // this.arrConstructions = this.constructionsService.getAll();
      this.arrCities = this.getCities();
      console.log(this.arrCities)
      // this.arrConstructionTypes = this.constructionsService.getConstructionTypes();


    }

    // onClickDelete($event: string) {
      //   const response = this.constructionsService.deleteConstructionById($event)
      //   this.arrConstructions = this.constructionsService.getAll();
      // }



  // //Aqui empiezan los fitros
  getCities() {
    console.log(this.arrConstructions)
    const constructionsUnordered = [...new Set(this.arrConstructions.map(construction => construction.city))];
    const constructionsOrdered = constructionsUnordered.sort((a, b) => a.localeCompare(b));
    console.log(constructionsOrdered);
    return constructionsOrdered;
  }

  filterByCity(pCity: string): Construction[] {
    return this.arrConstructions.filter(construction => construction.city === pCity)
  }

  onChangeCity($event: any) {
    // this.arrConstructions = $event.target.value === "" ? this.constructionsService.getAllConstructions() : this.constructionsService.filterByCity($event.target.value);
  };

  // onChangeConstructionType($event: any) {
  //   this.arrConstructions = $event.target.value === "" ? this.constructionsService.getAll() : this.constructionsService.filterByConstructionType($event.target.value);
  // };

  // onChangeName($event: any) {
  //   const ascendente = $event.target.value === "A-Z";
  //   this.arrConstructions = this.constructionsService.orderByName(ascendente);
  //   //si el value no corresponde, la funcion ejectua en orden descendente
  // }

  // onChangeAssignmentDate($event: any) {
  //   const ascendente = $event.target.value === "reciente";
  //   this.arrConstructions = this.constructionsService.orderByAssignmentDate(ascendente);
  // } //si el value no corresponde, la funcion ejectua en orden descendente

  // onChangeDeadline($event: any) {
  //   const ascendente = $event.target.value === "reciente";
  //   this.arrConstructions = this.constructionsService.orderByDeadline(ascendente);
  // } //si el value no corresponde, la funcion ejectua en orden descendente
}
