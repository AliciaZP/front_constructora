import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/interfaces/user.interface';
import { WorkersService } from 'src/app/core/services/workers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent {

  workersService = inject(WorkersService);
  constructionId: number = 0;

  arrWorkers: User[] = []
  arrCities: string[] = []
  arrJobs: string[] = []
  arrRoles: string[] = []

  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)

  botonActivo: boolean = true;

  async ngOnInit() {
    await this.getAllWorkers()
    // this.arrWorkers = this.workersService.getAll();
    this.arrCities = this.getCities();
    console.log(this.arrCities)
    this.arrJobs = this.getJobs();
    if(localStorage.getItem('Construction_id')){
      this.constructionId = Number(localStorage.getItem('Construction_id'))
      console.log(this.constructionId)
    }

    // this.arrRoles = this.workersService.getRoles();
  }


  onClick( workerId: string){
    console.log( workerId, this.constructionId );
  }

  getCities(): string[] {
    const workersUnordered = [...new Set(this.arrWorkers.map(worker => worker.city))];
    console.log(workersUnordered)
    const workersOrdered = workersUnordered.sort((a, b) => a.localeCompare(b));
    return workersOrdered;
  }

  filterByCity(pCity: string): User[] {
    return this.arrWorkers.filter(worker => worker.city === pCity)
  }

  getJobs(): string[] {
    const workersUnordered = [...new Set(this.arrWorkers.map(worker => worker.job))];
    const workersOrdered = workersUnordered.sort((a, b) => a.localeCompare(b));
    return workersOrdered;
  }

  filterByJob(pJob: string): User[] {
    return this.arrWorkers.filter(worker => worker.job === pJob)
  }

  async getAllWorkers() {

    const response = await this.workersService.getAll();
    this.arrWorkers = response;
  }


  async onClickDelete($event: string) {
    const result = await Swal.fire({
      title: "Eliminar operario",
      text: "¿Quieres borrar este operario?",
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
      await this.workersService.deleteWorkerById($event);
      this.arrWorkers = await this.workersService.getAll();
      Swal.fire({
        title: "Operario eliminado",
        text: "El operario seleccionado ha sido borradO",
        icon: "success",
        color: 'white',
        background: '#0f0f0f',
        confirmButtonColor: "#af1e2d",
        confirmButtonText: "Aceptar",
      }).then(() => {
        this.router.navigate(['/workers']);
      });
    }
  }


  // //Aqui empiezan los fitros

  async onChangeCity($event: any) {
    if (!$event.target.value) {
      this.arrWorkers = await this.workersService.getAll()
    } else {
      const response = await this.workersService.getWorkersByCity($event.target.value);
      this.arrWorkers = response

    }
  };

  async onChangeJob($event: any) {
    if (!$event.target.value) {
      this.arrWorkers = await this.workersService.getAll()
    } else {
      const response = await this.workersService.getWorkersByJob($event.target.value);
      this.arrWorkers = response
    }
  };

  async onChangeName($event: any) {
    if (!$event.target.value) {
      this.arrWorkers = await this.workersService.getAll()
    } else {
      const response = await this.workersService.getWorkersByOrderSurname($event.target.value);
      this.arrWorkers = response
    }
  }

}
