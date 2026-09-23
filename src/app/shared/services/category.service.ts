import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient);
  private categories = signal<Category[]>([]);

  constructor() {
    this.loadCategories();
  }
  loadCategories() {
    this.http.get<Category[]>('/data/categories.json').subscribe({
      next: (data) => {
        this.categories.set(data);
      },
    });
  }

  getCategories() {
    return this.categories.asReadonly();
  }
}
