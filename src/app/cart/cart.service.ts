import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart_api_url = environment.api_url + '/cart';
  private checkout_api_url = environment.api_url + '/checkout';
  constructor(private http: HttpClient) {}
  addToCart(product: Product): Observable<Product> {
    return this.http.post<Product>(this.cart_api_url, product);
  }
  getCartItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.cart_api_url);
  }
  clearCart(): Observable<void> {
    return this.http.delete<void>(this.cart_api_url);
  }
  checkout(products: Product[]): Observable<string> {
    return this.http.post<string>(this.checkout_api_url, products);
  }
}
