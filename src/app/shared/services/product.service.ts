import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = signal<Product[]>([
    {
      id: 1,
      name: 'Sony WH-1000XM5',
      categoryId: 1,
      price: 399,
      stock: 12,
      isActive: true,
    },
    {
      id: 2,
      name: 'MacBook Air M3',
      categoryId: 2,
      price: 1099,
      stock: 5,
      isActive: true,
    },
    {
      id: 3,
      name: 'iPhone 15',
      categoryId: 3,
      price: 799,
      stock: 0,
      isActive: false,
    },
  ]);
  getProducts() {
    return this.products.asReadonly();
  }
  deleteProduct(id: number) {
    this.products.update((products) => products.filter((product) => product.id !== id));
  }
}
