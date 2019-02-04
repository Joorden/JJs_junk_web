import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../service/item.service';
import {Item} from '../../models/item.model';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Item[] = [];
  canSelect = false;
  selectedIndex = null;
  selectedItem: Item = {itemCode: null,
    name: null,
    description: null,
    image: null,
    price: null
  };
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.cart = this.itemService.getcart();
  }
  selectItem(item, indx) {
    this.selectedIndex = indx;
    this.canSelect = true;
    this.selectedItem = item;
  }
  remove() {
    this.itemService.removeFromCart(this.selectedItem);
    this.cart = this.itemService.getcart();
}
}
