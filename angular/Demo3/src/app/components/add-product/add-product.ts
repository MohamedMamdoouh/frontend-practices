import { JsonPipe } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { ApiProducts } from './../../services/api-products';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../../models/iproduct';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [JsonPipe, FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct implements OnInit {
  constructor(
    private apiProducts: ApiProducts,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {}

  categories: Icategory[] = [];
  newProduct: Iproduct = {} as Iproduct;
  isEditMode: boolean = false;

  ngOnInit(): void {
    this.apiProducts.getAllCategories().subscribe({
      next: (res) => {
        this.categories = res;
      },
      error: (err: unknown) => {
        console.error('Error fetching categories:', err);
      },
    });

    // Check if we're in edit mode by looking for an 'id' parameter in the route
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.apiProducts.getProductById(Number(id)).subscribe({
        next: (res) => {
          this.newProduct = res;
          this.cdr.detectChanges();
        },
        error: (err: unknown) => {
          console.error('Error fetching product:', err);
        },
      });
    }
  }

  addNewProduct() {
    if (this.isEditMode) {
      this.apiProducts.updateProduct(this.newProduct).subscribe({
        next: () => {
          alert('Product updated successfully!');
          this.router.navigate(['/products']);
        },
        error: (err: unknown) => {
          console.error('Error updating product:', err);
        },
      });
    } else {
      this.apiProducts.addProduct(this.newProduct).subscribe({
        next: () => {
          alert('Product added successfully!');
          this.router.navigate(['/products']);
        },
        error: (err: unknown) => {
          console.error('Error adding product:', err);
        },
      });
    }
  }
}
