import { Injectable, inject } from '@angular/core';
import { User } from '../interfaces/user.interface';
// import { UsersDB } from 'src/app/db/users.db';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  httpClient = inject(HttpClient);
  url: string = 'http://localhost:3000/api/workers'
  constructor() { }
  //Las CONSTRUCTIONS son una base de datos creada el front para probar, como los import no se pueden editar. Creo un array editable y trabajo sobre él a partir de la copia de CONSTRUCTIONSDB
  // private arrWorkers: User[] = [...UsersDB];

  getAll() {
    return firstValueFrom(
      this.httpClient.get<User[]>(`${this.url}`)
    );
  }

  getWorkerById(workerId: string) {
    return firstValueFrom(
      this.httpClient.get<User>(`${this.url}/${workerId}`)
    );
  };

  createWorker(pWorker: User) {
    console.log(pWorker)
    return firstValueFrom(
      this.httpClient.post<User>(`${this.url}/new`, pWorker)
    )
  }

  updateWorkerById(workerId: string, formUpdate: User){
    return firstValueFrom(
      this.httpClient.put<User>(`${this.url}/${workerId}`, formUpdate)
    )
  }

  deleteWorkerById(workerId: string) {
    return firstValueFrom(
      this.httpClient.delete<User>(`${this.url}/${workerId}`)
    )
  }

  getWorkersByCity(city: string){
    return firstValueFrom(
      this.httpClient.get<User[]>(`${this.url}/cities/${city}`)
    )
  }
  getWorkersByOrderSurname(surname: string){
    return firstValueFrom(
      this.httpClient.get<User[]>(`${this.url}/order/${surname}`)
    )
  }
  getWorkersByJob(job: string){
    return firstValueFrom(
      this.httpClient.get<User[]>(`${this.url}/job/${job}`)
    )
  }

  //Funciones para los filtros

  //Funciones para las ciudades
  // getCities(): string[] {
  //   const workersUnordered = [...new Set(this.arrWorkers.map(worker => worker.city))];
  //   const workersOrdered = workersUnordered.sort((a, b) => a.localeCompare(b));
  //   return workersOrdered;
  // }

  // filterByCity(pCity: string): User[] {
  //   return this.arrWorkers.filter(worker => worker.city === pCity)
  // }

  // //Funciones para los trabajos
  // getJobs(): string[] {
  //   const workersUnordered = [...new Set(this.arrWorkers.map(worker => worker.job))];
  //   const workersOrdered = workersUnordered.sort((a, b) => a.localeCompare(b));
  //   return workersOrdered;
  // }

  // filterByJob(pJob: string): User[] {
  //   return this.arrWorkers.filter(worker => worker.job === pJob)
  // }

  // //Funciones para los roles
  // getRoles(): string[] {
  //   const workersUnordered = [...new Set(this.arrWorkers.map(worker => worker.role))];
  //   const workersOrdered = workersUnordered.sort((a, b) => a.localeCompare(b));
  //   return workersOrdered;
  // }

  // filterByRole(pRole: string): User[] {
  //   return this.arrWorkers.filter(worker => worker.role === pRole)
  // }


  // //Funciones para los filtros de ordenacion

  // orderByName(ascendente: boolean): User[] {
  //   // Ordenar y devolver una nueva lista sin modificar la original
  //   return this.arrWorkers.slice().sort((a, b) => {
  //     const comparacion = a.name.localeCompare(b.name);
  //     return ascendente ? comparacion : -comparacion;
  //   });
  // }

  // orderBySurname(ascendente: boolean): User[] {
  //   // Ordenar y devolver una nueva lista sin modificar la original
  //   return this.arrWorkers.slice().sort((a, b) => {
  //     const comparacion = a.surname.localeCompare(b.surname);
  //     return ascendente ? comparacion : -comparacion;
  //   });
  // }

  createWorkerReport() { }
}
