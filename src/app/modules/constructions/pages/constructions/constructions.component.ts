import { Component, inject } from '@angular/core';
import { Construction } from 'src/app/core/interfaces/construction.interfaces';
import { ConstructionsService } from 'src/app/core/services/constructions.service';

@Component({
  selector: 'constructions',
  templateUrl: './constructions.component.html',
  styleUrls: ['./constructions.component.css']
})
export class ConstructionsComponent {


  constructionsService = inject(ConstructionsService)

  arrConstructions: Construction[] = []

  arrCities: string[] = []
  arrConstructionTypes: string[] = []

  ngOnInit() {
    this.arrConstructions = this.constructionsService.getAll();
    this.arrCities = this.constructionsService.getCities();
    this.arrConstructionTypes = this.constructionsService.getConstructionTypes();
  }


  /*   onConstructionDelete($event: string) {
      const response = this.constructionsService.deleteConstructionById($event)
      this.arrConstructions = this.constructionsService.getAll();
    }
   */

  //Aqui empiezan los fitros

  onChangeCity($event: any) {
    this.arrConstructions = $event.target.value === "" ? this.constructionsService.getAll() : this.constructionsService.filterByCity($event.target.value);
  };

  onChangeConstructionType($event: any) {
    this.arrConstructions = $event.target.value === "" ? this.constructionsService.getAll() : this.constructionsService.filterByConstructionType($event.target.value);
  };

  onChangeName($event: any) {
    const ascendente = $event.target.value === "A-Z";
    this.arrConstructions = this.constructionsService.orderByName(ascendente);
    //si el value no corresponde, la funcion ejectua en orden descendente
  }

  onChangeAssignmentDate($event: any) {
    const ascendente = $event.target.value === "reciente";
    this.arrConstructions = this.constructionsService.orderByAssignmentDate(ascendente);
  } //si el value no corresponde, la funcion ejectua en orden descendente

  onChangeDeadline($event: any) {
    const ascendente = $event.target.value === "reciente";
    this.arrConstructions = this.constructionsService.orderByDeadline(ascendente);
  } //si el value no corresponde, la funcion ejectua en orden descendente

}
