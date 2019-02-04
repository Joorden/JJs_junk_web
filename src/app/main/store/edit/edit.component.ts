import {Component, OnInit, ViewChild} from '@angular/core';
import {LoginService} from '../../service/login.service';
import {ItemService} from '../../service/item.service';
import {Item} from '../../models/item.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  items: Item[] = [];
  selectedIndex = null;
  canSelect = false;
  selectedItem: Item = {itemCode: null,
  name: null,
  description: null,
  image: null,
  price: null
  };
  isedit = false;

  constructor(private loginService: LoginService, private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => this.items = items);
  }
  selectItem(item, index) {
    this.selectedIndex = index;
    this.canSelect = true;
    this.selectedItem = item;
  }
  delete(item: Item) {
    this.itemService.deleteItem(item.name).subscribe();
  }
  edit() {
    if (this.isedit) {
      this.isedit = false;
    } else {
      this.isedit = true;
    }
  }
  updateItem(form: NgForm) {
    this.itemService.editItem({itemCode: this.selectedItem.itemCode,
      name: this.selectedItem.name,
      description: form.value.description,
      image: form.value.image,
      price: form.value.price
    }).subscribe();
  }

}
