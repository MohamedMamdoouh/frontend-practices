import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { NotFound } from './components/not-found/not-found';
import { Product } from './components/product/product';
import { Vision } from './components/vision/vision';
import { Values } from './components/values/values';
import { Details } from './components/details/details';
import { Login } from './components/login/login';
import { authGuard } from './guards/auth-guard';
import { AddProduct } from './components/add-product/add-product';
import { Register } from './components/register/register';

export const routes: Routes = [
  // { path: '', component: Home },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  {
    path: 'about',
    component: AboutUs,
    children: [
      // { path: '', component: Vision },
      { path: '', redirectTo: 'vision', pathMatch: 'full' },
      { path: 'vision', component: Vision },
      { path: 'values', component: Values },
    ],
  },
  {
    path: 'products',
    loadComponent: () => import('./components/product/product').then((m) => m.Product),
    canActivate: [authGuard],
  },

  { path: 'details/:id', component: Details, canActivate: [authGuard] },
  { path: 'login', component: Login },
  { path: 'add-product', component: AddProduct, canActivate: [authGuard] },
  { path: 'edit-product/:id', component: AddProduct, canActivate: [authGuard] },
  { path: 'register', component: Register },
  { path: '**', component: NotFound },
];
