import { Component, inject, computed } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from '../../layout/header/header';
import { Sidebar } from '../../layout/sidebar/sidebar';
import { StatCard } from '../../shared/components/stat-card/stat-card';
import { ProductCard } from '../../shared/components/product-card/product-card';
import { ConfirmDialog } from '../../shared/components/confirm-dialog/confirm-dialog';

import { ProductService } from '../../shared/services/product.service';
import { CategoryService } from '../../shared/services/category.service';

@Component({
  imports: [Header, Sidebar, StatCard, ProductCard, ConfirmDialog],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  private router = inject(Router);
  categories = this.categoryService.getCategories();

  products = this.productService.getProducts();

  loading = this.productService.isLoading();

  error = this.productService.getError();

  productsCount = computed(() => this.products().length);

  ordersCount = 36;

  categoriesCount = computed(() => this.categories().length);

  revenue = 8450;

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
    this.router.navigate(['/products', id]);
  }
}
