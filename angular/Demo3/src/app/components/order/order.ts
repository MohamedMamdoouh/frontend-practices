import { AfterViewInit, Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Icategory } from '../../models/icategory';
import { Product } from '../product/product';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [FormsModule, Product, DatePipe, CurrencyPipe],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order implements AfterViewInit {
  categories: Icategory[];
  selectedCategoryId: number = 0;
  currentDate = new Date();
  totalPrice: number = 0;
  @ViewChild('search') searchInput!: ElementRef;
  @ViewChild(Product) productComponent!: Product;

  constructor() {
    this.categories = [
      { id: 1, name: 'Electronics' },
      { id: 2, name: 'Accessories' },
    ];
  }

  ngAfterViewInit(): void {
    this.searchInput.nativeElement.value = 'Ahmed';
    console.log(this.productComponent.products);
  }

  // This method will be called when the total price changes in the Product component
  getTotalPrice(receivedPrice: number) {
    this.totalPrice = receivedPrice;
  }
}
