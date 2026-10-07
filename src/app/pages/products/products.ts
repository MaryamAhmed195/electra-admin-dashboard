import { Component, inject } from '@angular/core';
import { ProductCard } from '../../shared/components/product-card/product-card';
import { ProductService } from '../../shared/services/product.service';
@Component({
  imports: [ProductCard],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {
  private productService = inject(ProductService);

  products = this.productService.getProducts();
}
