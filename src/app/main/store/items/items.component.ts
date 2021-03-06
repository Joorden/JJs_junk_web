import { Component, OnInit } from '@angular/core';
import {Item} from '../../models/item.model';
import {ItemService} from '../../service/item.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => this.items = items);
    console.log(this.items);
  }
}
