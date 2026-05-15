import { StaticProductsService } from './../../services/static-products-service';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { HighlightElement } from '../../directives/highlight-element';
import { Router, RouterLink } from '@angular/router';
import { ApiProducts } from '../../services/api-products';

@Component({
  selector: 'app-product',
  imports: [FormsModule, CurrencyPipe, DatePipe, HighlightElement, RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnChanges, OnInit {
  products: Iproduct[] = [];
  filteredProducts: Iproduct[] = [];
  totalPrice: number = 0;
  @Input() receivedCategoryId: number = 0;
  @Output() onTotalPriceChange: EventEmitter<number>;

  constructor(
    // private staticProductsService: StaticProductsService,
    private apiProducts: ApiProducts,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {
    this.onTotalPriceChange = new EventEmitter<number>();
    // this.products = this.staticProductsService.getAllProducts();
    // this.filteredProducts = this.products;
  }
  ngOnInit(): void {
    this.apiProducts.getAllProducts().subscribe({
      next: (res) => {
        this.products = res;
        this.filteredProducts = this.products;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
    });
  }

  ngOnChanges() {
    this.filterProducts();
  }

  filterProducts() {
    // this.filteredProducts = this.staticProductsService.getProductByCategoryId(
    //   this.receivedCategoryId,
    // );

    this.apiProducts.getProductsByCategoryId(this.receivedCategoryId).subscribe({
      next: (res) => {
        this.filteredProducts = res;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching products by category:', err);
      },
    });
  }

  buy(count: string, price: number) {
    this.totalPrice += Number(count) * price;
    this.onTotalPriceChange.emit(this.totalPrice);
  }

  goToDetails(productId: number) {
    // this.router.navigateByUrl(`/details/${productId}`);
    this.router.navigate(['/details', productId]);
  }

  deleteProduct(productId: number) {
    confirm('Are you sure you want to delete this product?') &&
      this.apiProducts.deleteProduct(productId).subscribe({
        next: () => {
          this.products = this.products.filter((p) => p.id !== productId);
          this.filteredProducts = this.products;
          this.cdr.detectChanges();
          alert('Product deleted successfully!');
        },
        error: (err) => {
          console.error('Error deleting product:', err);
        },
      });
  }
}
