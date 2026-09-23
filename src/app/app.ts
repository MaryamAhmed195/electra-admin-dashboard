import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './shared/models/product';
import { Header } from './layout/header/header';
import { Sidebar } from './layout/sidebar/sidebar';
import { StatCard } from './shared/components/stat-card/stat-card';
import { ProductCard } from './shared/components/product-card/product-card';
import { ConfirmDialog } from './shared/components/confirm-dialog/confirm-dialog';
import { ProductService } from './shared/services/product.service';
import { CategoryService } from './shared/services/category.service';
@Component({
  imports: [RouterOutlet, Header, Sidebar, StatCard, ProductCard, ConfirmDialog],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  categories = this.categoryService.getCategories();
  products = this.productService.getProducts();
  loading = this.productService.isLoading();
  error = this.productService.getError();
  protected readonly title = signal('firstproject');

  productsCount = 128;
  ordersCount = 36;
  categoriesCount = this.categories().length;
  revenue = 8450;

  product = this.productService.getProducts();
  showConfirm = false;
  selectedProductId: number | null = null;

  handleDelete(id: number) {
    this.selectedProductId = id;
    this.showConfirm = true;
  }
  confirmDelete() {
    if (this.selectedProductId !== null) {
      this.productService.deleteProduct(this.selectedProductId);
    }
    this.showConfirm = false;
    this.selectedProductId = null;
  }
  retryProducts() {
    this.productService.loadProducts();
  }

  cancelDelete() {
    this.showConfirm = false;
    this.selectedProductId = null;
  }
  handleView(id: number) {
    console.log('view product:', id);
  }
}
