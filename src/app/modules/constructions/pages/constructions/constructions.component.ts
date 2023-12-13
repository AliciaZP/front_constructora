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
  arrConstructionTypes: string[] = []

  constructionsService = inject(ConstructionsService)
  botonActivo: boolean = true;
  arrCities: any[] = []

  constructor(){}

  async ngOnInit() {
    this.arrConstructions = await this.constructionsService.getAllConstructions();
    console.log(this.arrConstructions)
      // this.arrConstructions = this.constructionsService.getAll();
      this.arrCities = this.getCities();
      console.log(this.arrCities)
      this.arrConstructionTypes = this.getConstructionTypes();
  }



  getConstructionTypes(): string[] {
    const constructionsUnordered = [...new Set(this.arrConstructions.map(construction => construction.construction_type))];
    const constructionsOrdered = constructionsUnordered.sort((a, b) => a.localeCompare(b));
    return constructionsOrdered;
  }

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

  async onChangeCity($event: any) {
    try {
      if(!$event.target.value){
        this.arrConstructions = await this.constructionsService.getAllConstructions();
      }else{
        const response = await this.constructionsService.getConstructionsByCity($event.target.value)
        this.arrConstructions = response;

      }
    } catch (error) {
      console.log(error)
    }

  };

  async onChangeConstructionType($event: any) {
    try {
      if(!$event.target.value){
        this.arrConstructions = await this.constructionsService.getAllConstructions();
      }else{
      const response = await this.constructionsService.getConstructionByType($event.target.value);
      this.arrConstructions = response;
      }
    } catch (error) {
      console.log(error)
    }

  };

  async onChangeName($event: any) {
    const response = await this.constructionsService.getConstructionByOrderName($event.target.value)
    this.arrConstructions = response;
    //si el value no corresponde, la funcion ejectua en orden descendente
  }

  async onChangeAssignmentDate($event: any) {
    const response = await this.constructionsService.getConstructionByOrderDate($event.target.value)
    this.arrConstructions = response;
  } //si el value no corresponde, la funcion ejectua en orden descendente

  async onChangeDeadline($event: any) {
    const response = await this.constructionsService.getConstructionByOrderDeadline($event.target.value)
    this.arrConstructions = response;
  } //si el value no corresponde, la funcion ejectua en orden descendente

  // onClickDelete($event: string) {
      //   const response = this.constructionsService.deleteConstructionById($event)
      //   this.arrConstructions = this.constructionsService.getAll();
      // }
}
