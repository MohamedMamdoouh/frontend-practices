import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticProductsService } from '../../services/static-products-service';
import { Iproduct } from '../../models/iproduct';
import { CurrencyPipe, DatePipe, Location } from '@angular/common';
import { ApiProducts } from '../../services/api-products';

@Component({
  selector: 'app-details',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  productId: number = 0;
  product: Iproduct | null = null;
  arrIds: number[] = [];
  currentIndex: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    // private staticProductsService: StaticProductsService,
    private apiProducts: ApiProducts,
    private location: Location,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {
    // this.arrIds = this.staticProductsService.mapProductsToIds();
  }

  ngOnInit(): void {
    // this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    // this.product = this.staticProductsService.getProductById(this.productId);

    this.apiProducts.mapProductsToIds().subscribe({
      next: (res) => {
        this.arrIds = res.map((id) => Number(id));
        this.currentIndex = this.arrIds.indexOf(this.productId);
        this.cdr.detectChanges();
      },
      error: (err: unknown) => {
        console.error('Error fetching product IDs:', err);
      },
    });

    this.activatedRoute.paramMap.subscribe((params) => {
      const routeId = Number(params.get('id'));
      if (Number.isNaN(routeId)) {
        this.product = null;
        this.cdr.detectChanges();
        return;
      }

      this.productId = routeId;
      this.currentIndex = this.arrIds.indexOf(this.productId);
      // this.product = this.staticProductsService.getProductById(this.productId);
      this.apiProducts.getProductById(this.productId).subscribe({
        next: (res) => {
          this.product = { ...res, id: Number(res.id) };
          this.currentIndex = this.arrIds.indexOf(this.productId);
          this.cdr.detectChanges();
        },
        error: (err: unknown) => {
          this.product = null;
          this.cdr.detectChanges();
          console.error('Error fetching product by ID:', err);
        },
      });
    });
  }

  goBack() {
    this.location.back();
  }

  goNext() {
    this.currentIndex = this.arrIds.indexOf(this.productId);
    if (this.currentIndex < this.arrIds.length - 1) {
      this.currentIndex = this.currentIndex + 1;
      this.productId = this.arrIds[this.currentIndex];
    } else {
      return;
    }

    this.router.navigate(['/details', this.productId]);
  }

  goPrev() {
    this.currentIndex = this.arrIds.indexOf(this.productId);
    if (this.currentIndex > 0) {
      this.currentIndex = this.currentIndex - 1;
      this.productId = this.arrIds[this.currentIndex];
    } else {
      return;
    }

    this.router.navigate(['/details', this.productId]);
  }
}
