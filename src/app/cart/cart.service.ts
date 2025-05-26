import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private api_url = environment.api_url + '/cart';
  constructor(private http: HttpClient) {}
  addToCart(product: Product): Observable<Product> {
    return this.http.post<Product>(this.api_url, product);
  }
  getCartItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api_url);
  }
  clearCart(): Observable<void> {
    return this.http.delete<void>(this.api_url);
  }
}
