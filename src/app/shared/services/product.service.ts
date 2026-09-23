import { Injectable, signal, inject } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private products = signal<Product[]>([]);
  private loading = signal(true);
  private error = signal('');

  constructor() {
    this.loadProducts();
  }

  loadProducts() {
    this.loading.set(true);
    this.error.set('');
    this.http.get<Product[]>('/data/products.json').subscribe({
      next: (data) => {
        this.products.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load products.');
        this.loading.set(false);
      },
    });
  }

  getProducts() {
    return this.products.asReadonly();
  }
  isLoading() {
    return this.loading.asReadonly();
  }

  getError() {
    return this.error.asReadonly();
  }
  deleteProduct(id: number) {
    this.products.update((products) => products.filter((product) => product.id !== id));
  }
}
