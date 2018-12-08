import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  newItem: any = {
    qty: 0,
    product: {}
  };

  items: any[] = [];

  constructor(public storage: StorageService) {
    this.items = storage.get('cart') || []; // Subscreve o cont. de items pelo que estiver no storage ou [] se storage não tiver nada
  }

  add(item: any = {}) {
    return new Promise((resolve, reject) => {
      if (!item.id) {
        reject('É necessário um item. O item deve ter um id');
      } else {
        let exists = false;
        // logica pra percorrer os itens do carrinho de compras e atualizar + 1 caso existir
        this.items.map((row) => {
          // Se o item já existir no carrinho, atualiza a quantidade
          if (row.product.id == item.id) {
            row.qty++;
            exists = true;
          }
        })

        // Se não existe, adiciona um novo item
        if (!exists) {
          this.newItem.product = item;
          this.newItem.qty = 1;
          this.items.push(this.newItem);
        }

        this.storage.set('cart', this.items) // atualiza o storage
        resolve(this.items); // Resolve a promessa
      }
    })
  }

  clear() {
    this.storage.set('cart', []);
    this.items = [];
    console.info('Carrinho Vazio');
  }

}
