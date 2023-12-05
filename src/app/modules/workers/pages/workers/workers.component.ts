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
  /* 
    arrCities: string[] = []
    arrConstructionTypes: string[] = [] */

  botonActivo: boolean = true;

  ngOnInit() {
    this.arrWorkers = this.workersService.getAll();
    /*     this.arrCities = this.constructionsService.getCities();
        this.arrConstructionTypes = this.constructionsService.getConstructionTypes(); */
  }

  onClickDelete($event: string) {
    const response = this.workersService.deleteWorkerById($event)
    this.arrWorkers = this.workersService.getAll();
  }
}
