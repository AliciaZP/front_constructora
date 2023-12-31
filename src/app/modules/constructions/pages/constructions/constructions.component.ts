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
  /* ESTO ES EL PAGINADO PARA CUANDO SE PUEDA USAR ENLAZADO CON EL BACK
  page: number = 1;
    totalPages: number = 0; */

  arrCities: string[] = []
  arrConstructionTypes: string[] = []

  botonActivo: boolean = true;

  ngOnInit() {
    this.arrConstructions = this.constructionsService.getAll();
    this.arrCities = this.constructionsService.getCities();
    this.arrConstructionTypes = this.constructionsService.getConstructionTypes();

    /* ESTO ES EL PAGINADO PARA CUANDO SE PUEDA USAR ENLAZADO CON EL BACK    
    this.loadConstructions(); */
  }

  onClickDelete($event: string) {
    const response = this.constructionsService.deleteConstructionById($event)
    this.arrConstructions = this.constructionsService.getAll();
  }


  /* ESTO ES EL PAGINADO PARA CUANDO SE PUEDA USAR ENLAZADO CON EL BACK
    modifyPage(siguiente: boolean) {
      if (siguiente) this.page++;
      else this.page--;
      this.loadConstructions();
    }
  
    async loadConstructions() {
      try {
        const response = await this.constructionsService.getAll(this.page)
        this.arrConstructions = response.results;
        this.totalPages = response.info.pages;
      } catch (error) {
        console.log(error);
      }
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
