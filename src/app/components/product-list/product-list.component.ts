import { ProductsService } from './../../providers/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  loading: boolean = true;
  items: any[];
  constructor(public productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.list().then((products: any[]) => {
      setTimeout(() => {
        this.items = products;
        this.loading = false;
      }, 3 * 1000)
    });
  }

}
