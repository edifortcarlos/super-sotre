import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from './../../providers/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})
export class SearchbarComponent implements OnInit {

  submitted: boolean = false;
  keyword: string = null;
  items: any[] = [];
  @Output() closeSearch = new EventEmitter;

  constructor(public productsService: ProductsService, public router: Router) { }

  ngOnInit() {
  }

  submit(e) {
    e.preventDefault() // Previnir reload no browser
    if (this.keyword) {
      this.submitted = true;
      this.productsService.search(this.keyword).then((items: any[]) => {
        this.items = items;
        if (items.length) this.submitted = false;
      });
    }
  }

  hideModal() {
    this.closeSearch.emit();
  }

  goTo(item) {
    this.hideModal();
    this.router.navigate([item.router]);
    this.productsService.scrollTop();
  }
}
