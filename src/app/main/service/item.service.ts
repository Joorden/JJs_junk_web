import {EventEmitter, Injectable} from '@angular/core';
import {Item} from '../models/item.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private cartedited = new EventEmitter<Item[]>();
  private itemUrl = 'https://jjjunk.herokuapp.com/api/items';
  itemSelected = new EventEmitter<Item>();
  private itemCart: Item[] = [];
  constructor(private httpClient: HttpClient, private loginService: LoginService) { }


  addtocart(item) {
    this.itemCart.push(item);
    this.cartedited.emit(this.itemCart.slice());
  }
  getcart() {
    return this.itemCart.slice();
  }
  getItems() {
    const httpHeaders = new HttpHeaders({
    });
    const options = {
      headers: httpHeaders
    };
    return this.httpClient.get<Item[]>(this.itemUrl, options);
  }
  registerItem(formdata): Observable<Item> {
    const httpHeaders = new HttpHeaders({
      'Authorization' : this.loginService.authentication
    });
    const options = {
      headers: httpHeaders
    };
    return this.httpClient.post<Item>(this.itemUrl, formdata, options);
  }
}
