import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';





@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private tokenKey = 'token';
  constructor() { }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  decodeToken(){
    const token = this.getToken();

    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log(decoded);
        return decoded;
      } catch (error) {
        console.error('Error al decodificar el token:', error);
        return null;
      }
    }

    return null;
  }


}
