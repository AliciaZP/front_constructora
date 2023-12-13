import { Component, inject } from '@angular/core';
import { User } from 'src/app/core/interfaces/user.interface';
import { WorkersService } from 'src/app/core/services/workers.service';

@Component({
  selector: 'workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent {

  workersService = inject(WorkersService)

  arrWorkers: User[] = []
  arrCities: string[] = []
  arrJobs: string[] = []
  arrRoles: string[] = []

  botonActivo: boolean = true;

  async ngOnInit() {
    await this.getAllWorkers()
    // this.arrWorkers = this.workersService.getAll();
    this.arrCities = this.getCities();
    console.log(this.arrCities)
    // this.arrJobs = this.workersService.getJobs();
    // this.arrRoles = this.workersService.getRoles();
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

  async getAllWorkers(){
    const response = await this.workersService.getAll();
    this.arrWorkers = response;
  }
  // onClickDelete($event: string) {
  //   const response = this.workersService.deleteWorkerById($event)
  //   this.arrWorkers = this.workersService.getAll();
  // }

  // //Aqui empiezan los fitros

  async onChangeCity($event: any) {
    const response = await this.workersService.getWorkersByCity($event.target.value);
    this.arrWorkers = response
  };

  // onChangeRole($event: any) {
  //   this.arrWorkers = $event.target.value === "" ? this.workersService.getAll() : this.workersService.filterByRole($event.target.value);
  // };
  // onChangeJob($event: any) {
  //   this.arrWorkers = $event.target.value === "" ? this.workersService.getAll() : this.workersService.filterByJob($event.target.value);
  // };

  // onChangeName($event: any) {
  //   const ascendente = $event.target.value === "A-Z";
  //   this.arrWorkers = this.workersService.orderByName(ascendente);
  //   //si el value no corresponde, la funcion ejectua en orden descendente
  // }

  // onChangeSurname($event: any) {
  //   const ascendente = $event.target.value === "A-Z";
  //   this.arrWorkers = this.workersService.orderBySurname(ascendente);
  //   //si el value no corresponde, la funcion ejectua en orden descendente
  // }

}
