import { CartService } from './../../providers/cart.service';
import { ProductsService } from './../../providers/products.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {

  @Input() product: any = {};
  @Input() view: Boolean = false;

  constructor(public productsService: ProductsService, public cartService: CartService) { }

  ngOnInit() {
    setTimeout(() => {
      this.productsService.scrollTop();
    }, 0)
  }

  addToCart(item: any) {
    this.cartService.add(item).then(() => {
      console.log(item.name + ' adicionado/atulaizado no carrinho');
    }).catch(console.warn)
  }

}
