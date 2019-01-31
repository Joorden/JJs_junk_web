import { Component, OnInit } from '@angular/core';
import {ItemService} from '../service/item.service';
import {Item} from '../models/item.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: []
})
export class StoreComponent implements OnInit {
  selectedItem: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.itemSelected.subscribe((item: Item) => this.selectedItem = item);
  }
  reset() {
    this.selectedItem = null;
  }

}
