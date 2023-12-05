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

  /*   arrCategorias: string[] = []
    arrAutores: string[] = [] */

  ngOnInit() {
    this.arrConstructions = this.constructionsService.getAll();
    /*     this.arrCategorias = this.postsServices.getCategorias();
        this.arrAutores = this.postsServices.getAutores(); */
  }


  /*   onConstructionDelete($event: string) {
      const response = this.constructionsService.deleteConstructionById($event)
      this.arrConstructions = this.constructionsService.getAll();
    }
   */

  //Aqui empiezan los fitros
  /* 
    onChangeCategoria($event: any) {
      this.arrPosts = $event.target.value === "" ? this.postsServices.getAll() : this.postsServices.getByCategoria($event.target.value);
    };
  
    onChangeAutor($event: any) {
      this.arrPosts = $event.target.value === "" ? this.postsServices.getAll() : this.postsServices.getByAutor($event.target.value);
    }
  
    onChangeTitulo($event: any) {
      const ascendente = $event.target.value === "A-Z";
      this.arrPosts = this.postsServices.orderByTitulo(ascendente);
      //si el value no corresponde, la funcion ejectua en orden descendente
    }
  
    onChangeFecha($event: any) {
      const ascendente = $event.target.value === "reciente";
      this.arrPosts = this.postsServices.orderByDate(ascendente);
    } //si el value no corresponde, la funcion ejectua en orden descendente
  
   */

}


/* 
getCities() { }
filterByCity() { }

getConstructionTypes() { }
filterByConstructionType() { }

orderByName() { }

orderByAssignmentDate() { }

orderByDeadline() { } */