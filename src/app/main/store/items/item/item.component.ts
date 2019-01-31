import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../../../models/item.model';
import {ItemService} from '../../../service/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }
  onselected()  {
    this.itemService.itemSelected.emit(this.item);
  }
}
