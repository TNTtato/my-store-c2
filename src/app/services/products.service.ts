import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllProducts() {
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products');
  }

  getAllCategories() {
    return this.httpClient.get<string[]>('https://fakestoreapi.com/products/categories');
  }
}
