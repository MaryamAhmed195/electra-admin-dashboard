import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product';
@Component({
  imports: [],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  product = input<Product>();
  deleteProduct = output<number>();
  handleDelete() {
    this.deleteProduct.emit(this.product()!.id);
  }
  viewProduct = output<number>();

  handleView() {
    this.viewProduct.emit(this.product()!.id);
  }
}
