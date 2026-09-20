import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './shared/models/product';
import { Header } from './layout/header/header';
import { Sidebar } from './layout/sidebar/sidebar';
import { StatCard } from './shared/components/stat-card/stat-card';
import { ProductCard } from './shared/components/product-card/product-card';
import { ConfirmDialog } from './shared/components/confirm-dialog/confirm-dialog';
@Component({
  imports: [RouterOutlet, Header, Sidebar, StatCard, ProductCard, ConfirmDialog],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('firstproject');

  productsCount = 128;
  ordersCount = 36;
  categoriesCount = 5;
  revenue = 8450;

  products: Product[] = [
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
  ];
  showConfirm = false;
  selectedProductId: number | null = null;

  handleDelete(id: number) {
    this.selectedProductId = id;
    this.showConfirm = true;
  }
  confirmDelete() {
    if (this.selectedProductId !== null) {
      this.products = this.products.filter((product) => product.id !== this.selectedProductId);
    }
    this.showConfirm = false;
    this.selectedProductId = null;
  }

  cancelDelete() {
    this.showConfirm = false;
    this.selectedProductId = null;
  }
  handleView(id: number) {
    console.log('view product:', id);
  }
}
