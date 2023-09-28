import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  getAllProduct():Observable<any>{
    return this.http.get('http://localhost:3000/api/products');
   }
   
   addProduct(productData: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/products', productData);
  }

  deleteProduct(productId: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/products/${productId}`);
  }

  getProductById(productId: number | string): Observable<any> {
    return this.http.get(`http://localhost:3000/api/products/${productId}`);
  }
  updateProduct(product: any): Observable<void> {
    console.log(product.id)
    return this.http.put<void>(`http://localhost:3000/api/products/${product.id}`, product);
  }
  
}
