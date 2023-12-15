import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

type LoginRequest = {
  email: string,
  password: string
}
type LoginResponse = {
  success: string,
  token: string,
  error: string

}


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = 'http://localhost:3000/api/users';
  httpClient = inject(HttpClient);
  constructor() { }

  userLogin(body: LoginRequest){
    return firstValueFrom(
      this.httpClient.post<LoginResponse>(`${this.url}/login`, body)
    )
  }



}
