import { MenuService } from './../../providers/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.sass']
})
export class ProductsPageComponent implements OnInit {

  constructor(public menuService: MenuService) { }

  ngOnInit() {
  }

}
