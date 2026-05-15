import { Component, signal } from '@angular/core';
import { Footer } from './components/footer/footer';
import { Product } from './components/product/product';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [Footer, Product, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Test2');
}
