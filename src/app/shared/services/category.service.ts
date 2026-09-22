import { Injectable, signal } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories = signal<Category[]>([
    {
      id: 1,
      name: 'Audio',
    },
    {
      id: 2,
      name: 'Laptops',
    },
    {
      id: 3,
      name: 'Phones',
    },
    {
      id: 4,
      name: 'Accessories',
    },
    {
      id: 5,
      name: 'Wearables',
    },
  ]);

  getCategories() {
    return this.categories.asReadonly();
  }
}
