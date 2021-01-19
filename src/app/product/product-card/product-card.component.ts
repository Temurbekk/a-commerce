import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() productData: any;
  buyNow: boolean | undefined;
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  buy(id: number | undefined) {
    // this.buyNow = true;
    this._router.navigate(['/shop-product', id]);
  }
}
