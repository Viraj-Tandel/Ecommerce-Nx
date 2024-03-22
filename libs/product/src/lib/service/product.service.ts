import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  // * api call to get the products by category
  getProductsByCategory(category: string) {
    return this.httpClient.get<ProductModel[]>(
      `https://fakestoreapi.com/products/category/${category}`,
    );
  }

  // * api call to get the all products
  getAllProducts() {
    return this.httpClient.get<ProductModel[]>(`https://fakestoreapi.com/products`);
  }
}
