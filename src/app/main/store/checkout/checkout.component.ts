import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../service/item.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.removeCart();
  }

}
