import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { UsersDB } from 'src/app/db/users.db';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor() { }
  //Las CONSTRUCTIONS son una base de datos creada el front para probar, como los import no se pueden editar. Creo un array editable y trabajo sobre él a partir de la copia de CONSTRUCTIONSDB
  private arrWorkers: User[] = [...UsersDB];

  getAll() {
    return this.arrWorkers;
  }

  getWorkerById() { }

  createWorker() { }

  createWorkerReport() { }

  updateWorkerById() { }

  deleteWorkerById(workerId: string): void {
    this.arrWorkers = this.arrWorkers.filter(worker => worker._id !== workerId);
  }


}
