import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userIdSubject = new BehaviorSubject<string | null>(null);

  constructor(private http:HttpClient) { 
    this.userIdSubject.next(localStorage.getItem('userId'));
  }


  getAllUsers():Observable<any>{
    return this.http.get('http://localhost:3000/api/users');
   }

  userId$: Observable<string | null> = this.userIdSubject.asObservable();

  setUserId(userId: string): void {
    localStorage.setItem('userId', userId);
    this.userIdSubject.next(userId);
  }

  getUserId(): string | null {
    return this.userIdSubject.value;
  }

  // setShowNav(value: boolean) {
  //   this.showNav = value;
  // }

  // getShowNav() {
  //   return this.showNav;
  // }
}
