import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Construction } from 'src/app/core/interfaces/construction.interfaces';
import { ConstructionsService } from 'src/app/core/services/constructions.service';

@Component({
  selector: 'id-construction',
  templateUrl: './id-construction.component.html',
  styleUrls: ['./id-construction.component.css']
})
export class IdConstructionComponent {

  constructionSelected!: Construction
  arrConstructions: Construction[] = []
  constructionsService = inject(ConstructionsService)
  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)
  botonActivo: boolean = true;


  async ngOnInit() {
    this.arrConstructions = await this.constructionsService.getAllConstructions();
    console.log(this.constructionSelected);
    this.activatedRoute.params.subscribe(async (params) => {

      const response = await this.constructionsService.getConstructionById(params['constructionId']);
      this.constructionSelected = response
      console.log(this.constructionSelected)
    })
  }


  // onClickDelete($event: string) {
  //   this.constructionsService.deleteConstructionById($event)
  //   this.arrConstructions = this.constructionsService.getAll();
  //   this.router.navigate(['/constructions']);
  // }

}
