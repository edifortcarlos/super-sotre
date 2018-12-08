import { MenuService } from './../../providers/menu.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  modal: boolean = false;
  constructor(public menuService: MenuService) { }

  ngOnInit() {
    document.addEventListener('scroll', (e) => {
      if (document.body.scrollTop > 65) {
        $('app-header nav').addClass('fixed');
      } else {
        $('app-header nav').removeClass('fixed');
      }
      this.menuService.fix();
    }, true);
  }

  hideSearch() {
    this.modal = false;
    console.log('Precionei o botão esconder search-bar')
  }

  showSearch() {
    this.modal = true;
    console.log('Precionei o botão mostar search-bar')
  }

}
