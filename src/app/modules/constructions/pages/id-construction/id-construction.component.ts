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
  arrWorkers!: any;


  async ngOnInit() {
    this.arrConstructions = await this.constructionsService.getAllConstructions();
    // const { workers } = this.constructionSelected;
    this.activatedRoute.params.subscribe(async (params) => {

      const response = await this.constructionsService.getConstructionById(params['constructionId']);
      this.constructionSelected = response
      const { workers } = this.constructionSelected;
      this.arrWorkers = workers;

    })
  }


  async onClickDelete($event: string) {
    this.constructionsService.deleteConstructionById($event)
    this.arrConstructions = await this.constructionsService.getAllConstructions();
    this.router.navigate(['/constructions']);
  }

}
