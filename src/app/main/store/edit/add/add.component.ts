import { OnInit } from '@angular/core';
import {Item} from '../../../models/item.model';
import {ItemService} from '../../../service/item.service';
import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  items: Item[] = [];
  selectedIndex = null;
  canSelect = false;
  selectedItem: Item = {itemCode: null,
  name: null,
  description: '',
  image: '',
  price: null
  };

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  addItem(form: NgForm) {
    this.itemService.registerItem({itemCode: form.value.ean,
  name: form.value.name,
  description: form.value.description,
  image: form.value.image,
  price: form.value.price}).subscribe();
  }
}
