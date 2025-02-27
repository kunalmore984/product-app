import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Hardcoded product data
  private products: Product[] = [
    { id: 1, name: 'PX5 pro', price: 599.99, description: 'Next Gen gaming console by PX' },
    { id: 2, name: 'Phone X', price: 39.99, description: 'Latest Smart Phone by X.' },
    { id: 3, name: 'Shampoo X', price: 29.99, description: 'Best Shampoo by X company.' }
  ];

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }
}
