import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getAllData() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
  }

  getDataById(id: number) {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  updateData(id: number, data: any) {
    return this.httpClient.put(`https://jsonplaceholder.typicode.com/todos/${id}`, data);
  }
}
