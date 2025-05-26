import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css'],
})
export class CartViewComponent implements OnInit {
  cartItems: Product[] = [];
  totalPrice: number = 0;
  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.cartService.getCartItems().subscribe((items: Product[]) => {
      this.cartItems = items;
      this.totalPrice = this.getTotalPrice();
    });
  }
  getTotalPrice(): number {
    const total = this.cartItems.reduce((total, item) => total + item.price, 0);
    return total;
  }
  clearCart() {
    this.cartService.clearCart().subscribe(() => {
      this.cartItems = [];
      this.totalPrice = 0;
    });
  }
  checkout() {
    this.cartService.checkout(this.cartItems).subscribe((msg) => {
      this.cartItems = [];
      this.totalPrice = 0;
      alert(msg);
    });
  }
}
