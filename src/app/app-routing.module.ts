import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CartComponent } from './cart/components/cart.component';
import { ProductCartComponent } from './product/product-cart/product-cart.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductCartComponent },
  { path: 'checkout', component: CartComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent },
];
