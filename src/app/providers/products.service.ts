import { Injectable } from '@angular/core';

import * as _ from 'lodash';
import * as $ from 'jquery';

const products = require('./products.json');
let BASEURL = window.location.href;
BASEURL = BASEURL.substring(0, BASEURL.length - 1);

@Injectable()
export class ProductsService {

  constructor() { }

  list() {
    return new Promise((resolve, reject) => {
      products.map((product, i) => {
        // Titulo no formato de Slug: qualquer-coisa
        products[i].titleSlug = _.kebabCase(product.name) + '/';
        // A rota do produto
        products[i].router = '/products/' + products[i].titleSlug + products[i].id;
        // A url deste post
        products[i].url = BASEURL + products[i].router;
      });
      resolve(products); // resolve a lista de posts
    });
  }

  view(id: any) {
    return new Promise((resolve, reject) => {
      this.list().then((products: any[]) => {
        const product = _.find(products, (p) => {
          return p.id == id;
        });
        return product ? resolve(product) : reject('Produto não existe');
      });
    });
  }

  search(keyword: string) {
    return new Promise((resolve, reject) => {
      this.list().then((products: any[]) => {
        let items: any[];
        if (products.length) {
          items = _.filter(products, (p) => {
            return p.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase());
          });
        }
        resolve(items);
      })
    })
  }

  scrollTop() {
    $('html, body').animate({
      scrollTop: 0
    }, 0)
  }

}
