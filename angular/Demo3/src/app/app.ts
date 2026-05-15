import { Component, signal } from '@angular/core';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Footer, Header, RouterOutlet, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Test3');
  dir: string = 'ltr';
  langauge$: Observable<string>;

  constructor(private store: Store<{ language: string }>) {
    this.langauge$ = this.store.select('language');

    this.langauge$.subscribe((language) => {
      this.dir = language === 'ar' ? 'rtl' : 'ltr';
    });
  }
}
