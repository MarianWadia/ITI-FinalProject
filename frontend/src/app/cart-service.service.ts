// cart.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  addToCart(userId: string, productId: string, quantity: number): Observable<any> {
    const body = { userId, productId, quantity };
    return this.http.post(`${this.baseUrl}/addToCart`, body);
  }

  updateQuantity(userId: string, productId: string, quantity: number): Observable<any> {
    const body = { userId, productId, quantity };
    return this.http.put(`${this.baseUrl}/updateQuantity`, body);
  }

  getUserCart(userId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getUserCart/${userId}`);
  }

  removeItem(userId: string, productId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/removeFromCart/${userId}/${productId}`);
  }

}
