import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../../models/item.model';
import {ItemService} from '../../../service/item.service';

@Component({
  selector: 'app-detailes',
  templateUrl: './detailes.component.html',
  styleUrls: ['./detailes.component.css']
})
export class DetailesComponent implements OnInit {
  @Input() item: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }
  add(item) {
    console.log(item);
    this.itemService.addtocart(item);
  }
}
