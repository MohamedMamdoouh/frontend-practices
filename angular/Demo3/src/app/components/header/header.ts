import { UserAuth } from './../../services/user-auth';
import { Component, OnInit } from '@angular/core';
import { StaticProductsService } from '../../services/static-products-service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { languageAction } from '../../store/language/language.action';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, AsyncPipe],
  providers: [StaticProductsService],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  isUserLoggedIn!: boolean;
  counter$: Observable<number>;
  language$: Observable<string>;
  currentLanguage!: string;

  constructor(
    private userAuth: UserAuth,
    private store: Store<{ counter: number; language: string }>,
  ) {
    this.counter$ = this.store.select('counter');
    this.language$ = this.store.select('language');
    this.language$.subscribe((language) => {
      this.currentLanguage = language;
    });
  }

  ngOnInit() {
    this.userAuth.getAuthSubject().subscribe((isLoggedIn) => {
      this.isUserLoggedIn = isLoggedIn;
    });
  }

  login() {
    this.userAuth.login();
  }

  logout() {
    this.userAuth.logout();
  }

  toggleLanguage() {
    this.store.dispatch(
      languageAction(this.currentLanguage ? (this.currentLanguage === 'en' ? 'ar' : 'en') : 'en'),
    );
  }
}

// providers: [StaticProductsService],
// this will create an instance of StaticProductsService and make it available for injection
// in this component and its children components. Different from providing it in the root,
// this will create a new instance of the service for each instance of the component,
// which can be useful for testing or when you want to have different states of the service
// for different parts of the application.
