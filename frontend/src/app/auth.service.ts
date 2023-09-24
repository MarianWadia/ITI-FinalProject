import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



interface User {
  firstName: string;
  secondName: string;
  userName: string;
  email: string;
  password: string;
}

interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private apiUrl = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/userRegister`, user);
  }

  login(credentials: Credentials): Observable<any> {
    return this.http.post(`${this.apiUrl}/userLogin`, credentials);
  }
}
