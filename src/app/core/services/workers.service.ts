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

  getWorkerById(workerId: string): User {
    const workerFound = this.arrWorkers.find(worker => worker._id === workerId);
    return workerFound ? { ...workerFound } : { _id: "", name: "", surname: "", dni: "", phone: "", email: "", password: "", role: "", active: true, job: "", city: "", image: "", }
  };

  createWorker(pWorker: User) {
    const usersDB = localStorage.getItem('array_newConstructions');
    if (usersDB) {
      this.arrWorkers = JSON.parse(usersDB);
    }
    this.arrWorkers.push(pWorker);
    localStorage.setItem('array_newWorkers', JSON.stringify(this.arrWorkers));
  }

  updateWorkerById(workerId: string, formUpdate: User): void {
    const workerIndex = this.arrWorkers.findIndex(worker => worker._id === workerId);

    if (workerIndex !== -1) {
      this.arrWorkers[workerIndex] = { ...this.arrWorkers[workerIndex], ...formUpdate };
    }
  }

  deleteWorkerById(workerId: string): void {
    this.arrWorkers = this.arrWorkers.filter(worker => worker._id !== workerId);
  }








  createWorkerReport() { }




}
