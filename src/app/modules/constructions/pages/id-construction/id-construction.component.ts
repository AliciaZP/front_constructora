import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Construction } from 'src/app/core/interfaces/construction.interfaces';
import { User } from 'src/app/core/interfaces/user.interface';
import { ConstructionsService } from 'src/app/core/services/constructions.service';
import { UsersService } from 'src/app/core/services/users.service';
import Swal from 'sweetalert2';

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
  usersService = inject(UsersService);
  userLogged!: User;



  async ngOnInit() {
    this.arrConstructions = await this.constructionsService.getAllConstructions();
    // const { workers } = this.constructionSelected;
    this.userLogged = await this.usersService.getUserLogged();
    this.activatedRoute.params.subscribe(async (params) => {

      const response = await this.constructionsService.getConstructionById(params['constructionId']);
      this.constructionSelected = response
      localStorage.setItem('Construction_id', this.constructionSelected.id);
      const { workers } = this.constructionSelected;
      this.arrWorkers = workers;
    })
  }

  async onClickDelete($event: string) {
    const result = await Swal.fire({
      title: "Eliminar obra",
      text: "¿Quieres borrada esta obra?",
      icon: "warning",
      color: 'white',
      background: '#0f0f0f',
      showCancelButton: true,
      confirmButtonColor: "#af1e2d",
      cancelButtonColor: "#a3a8a3",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      await this.constructionsService.deleteConstructionById($event);
      this.arrConstructions = await this.constructionsService.getAllConstructions();
      Swal.fire({
        title: "Obra eliminada",
        text: "La obra seleccionada ha sido borrada",
        icon: "success",
        color: 'white',
        background: '#0f0f0f',
        confirmButtonColor: "#af1e2d",
        confirmButtonText: "Aceptar",
      }).then(() => {
        this.router.navigate(['/constructions']);
      });
    }
  }
}
