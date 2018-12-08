import { MenuService } from './../../providers/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor(public menuService: MenuService) { }

  ngOnInit() {
  }

}
