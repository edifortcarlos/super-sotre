import { ProductsService } from './../../providers/products.service';
import { MenuService } from './../../providers/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  constructor(public menuService: MenuService) { }

  ngOnInit() {
  }

}
