import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProductsService {
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
      {
        id: 4,
        name: 'Smartwatch',
        price: 299.99,
        quantity: 5,
        imageUrl: 'https://picsum.photos/id/240/200/300',
        categoryId: 1,
        description: 'A stylish smartwatch to keep you connected on the go.',
        manufactureDate: new Date('2023-04-05'),
      },
    ];
  }

  products: Iproduct[];

  getAllProducts(): Iproduct[] {
    return this.products;
  }

  getProductById(id: number): Iproduct | null {
    return this.products.find((product) => product.id === id) || null;
  }

  getProductByCategoryId(categoryId: number): Iproduct[] {
    return this.products.filter((product) => product.categoryId === categoryId);
  }

  mapProductsToIds(): number[] {
    return this.products.map((product) => product.id);
  }
}
