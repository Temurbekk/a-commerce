import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCartComponent } from './product-cart/product-cart.component';



@NgModule({
  declarations: [ProductListComponent, ProductCartComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
