import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';
import { environment } from '../../environments/environment';
import { Icategory } from '../models/icategory';
import { UserAuth } from './user-auth';

@Injectable({
  providedIn: 'root',
})
export class ApiProducts {
  constructor(
    private httpClient: HttpClient,
    private userAuth: UserAuth,
  ) {}

  getAllProducts(): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(`${environment.baseUrl}/Products`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.userAuth.getUserToken() ?? ``}`,
      }),
    });
  }

  getAllCategories(): Observable<Icategory[]> {
    return this.httpClient.get<Icategory[]>(`${environment.baseUrl}/Categories`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.userAuth.getUserToken() ?? ``}`,
      }),
    });
  }

  getProductById(id: number): Observable<Iproduct> {
    return this.httpClient.get<Iproduct>(`${environment.baseUrl}/Products/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.userAuth.getUserToken() ?? ``}`,
      }),
    });
  }

  getProductsByCategoryId(categoryId: number): Observable<Iproduct[]> {
    // return this.httpClient.get<Iproduct[]>(
    //   `${environment.baseUrl}/Products?categoryId=${categoryId}`,
    //   {
    //     headers: new HttpHeaders({
    //       Authorization: `Bearer ${this.userAuth.getUserToken() ?? ``}`,
    //     }),
    //   },
    // );

    let searchParams = new HttpParams();
    searchParams = searchParams.append('categoryId', categoryId.toString());

    return this.httpClient.get<Iproduct[]>(`${environment.baseUrl}/Products`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.userAuth.getUserToken() ?? ``}`,
      }),
      // params: { categoryId: categoryId.toString() },
      params: searchParams,
    });
  }

  mapProductsToIds(): Observable<number[]> {
    return this.getAllProducts().pipe(
      map((products: Iproduct[]) => products.map((product: Iproduct) => Number(product.id))),
    );
  }

  addProduct(product: Iproduct): Observable<Iproduct> {
    return this.httpClient.post<Iproduct>(`${environment.baseUrl}/Products`, product, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.userAuth.getUserToken() ?? ``}`,
      }),
    });
  }

  updateProduct(product: Iproduct): Observable<Iproduct> {
    return this.httpClient.put<Iproduct>(`${environment.baseUrl}/Products/${product.id}`, product, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.userAuth.getUserToken() ?? ``}`,
      }),
    });
  }

  deleteProduct(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.baseUrl}/Products/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.userAuth.getUserToken() ?? ``}`,
      }),
    });
  }
}
