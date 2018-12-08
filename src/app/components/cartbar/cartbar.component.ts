import { CartService } from './../../providers/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartbar',
  templateUrl: './cartbar.component.html',
  styleUrls: ['./cartbar.component.sass']
})
export class CartbarComponent implements OnInit {

  constructor(public cart: CartService) { }

  ngOnInit() {
  }

  clear() {
    this.cart.clear();
  }

}
