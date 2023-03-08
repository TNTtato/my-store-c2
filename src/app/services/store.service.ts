import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  private shoppingCart: Product[] = [];
  private cart =  new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  addProduct(product: Product) {
    this.shoppingCart.push(product);
    this.cart.next(this.shoppingCart);
  }

  getShoppingCart() {
    return this.shoppingCart;
  }

  getTotal() {
    return this.shoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
