import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductsService } from '@api/products.service';
import { CardComponent } from '@features/products/card/card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export default class ProductsComponent {
  private readonly _productSvc = inject(ProductsService);
  products = this._productSvc.products;
}
