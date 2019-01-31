import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../service/item.service';
import {Item} from '../../models/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Item[] = [];
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.cart = this.itemService.getcart();
  }
}
