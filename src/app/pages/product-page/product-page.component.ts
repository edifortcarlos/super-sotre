import { MenuService } from './../../providers/menu.service';
import { CartService } from './../../providers/cart.service';
import { ProductsService } from './../../providers/products.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.sass']
})
export class ProductPageComponent implements OnInit {

  product: any = {};

  constructor(
    public activatedRouter: ActivatedRoute,
    public router: Router,
    public productService: ProductsService,
    public cartService: CartService, //==> Este provider é desnecessário neste component 
    public menuService: MenuService

  ) { 

    this.activatedRouter.params.subscribe(params => {
      let id = params['id'];
      this.productService.view(id).then((product: any) => {
        this.product = product;
      })
      .catch((e) => {
        console.error(e);
        this.router.navigate(['/404-error-page'])
      })
    })
  }

  ngOnInit() {
  }

}
