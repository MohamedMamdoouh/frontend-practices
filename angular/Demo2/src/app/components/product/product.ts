import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe, NgClass, NgStyle } from '@angular/common';
import { HighlightElement } from '../../directives/highlight-element';
import { GetNumberToPowerPipe } from '../../pipes/get-number-to-power-pipe';

@Component({
  selector: 'app-product',
  imports: [
    FormsModule,
    NgClass,
    NgStyle,
    HighlightElement,
    CurrencyPipe,
    DatePipe,
    GetNumberToPowerPipe,
  ],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  products: Iproduct[];
  selectedCategoryId: number = 0;
  categories: Icategory[];
  totalPrice: number = 0;
  currentDate = new Date();
  testNumber: number = 5;

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Laptop',
        price: 5687.99,
        quantity: 1,
        imageUrl: 'https://picsum.photos/id/237/200/300',
        categoryId: 1,
        description: 'A high-performance laptop for all your computing needs.',
        manufactureDate: new Date('2023-01-01'),
      },
      {
        id: 2,
        name: 'Smartphone',
        price: 499.99,
        quantity: 20,
        imageUrl: 'https://picsum.photos/id/238/200/300',
        categoryId: 1,
        description: 'A sleek smartphone with the latest features and technology.',
        manufactureDate: new Date('2023-02-15'),
      },
      {
        id: 3,
        name: 'Headphones',
        price: 199.99,
        quantity: 0,
        imageUrl: 'https://picsum.photos/id/239/200/300',
        categoryId: 2,
        description: 'Noise-cancelling headphones for an immersive audio experience.',
        manufactureDate: new Date('2023-03-10'),
      },
    ];

    this.categories = [
      { id: 1, name: 'Electronics' },
      { id: 2, name: 'Accessories' },
    ];
  }

  buy(quantity: string, price: number) {
    this.totalPrice += Number(quantity) * price;
  }

  incremantCategoryId() {
    this.selectedCategoryId = Number(this.selectedCategoryId) + 1;
  }
}
