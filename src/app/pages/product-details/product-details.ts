import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
@Component({
  imports: [],
  selector: 'app-product-details',
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  productId = Number(this.route.snapshot.paramMap.get('id'));

  products = this.productService.getProducts();

  product = computed(() => this.products().find((product) => product.id === this.productId));
}
