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
  removeFromCart(item) {
    this.itemCart.splice(this.itemCart.indexOf(item), 1);
    this.cartedited.emit(this.itemCart.slice());
  }
  getcart() {
    return this.itemCart.slice();
  }
  removeCart() {
    this.itemCart = [];
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
  deleteItem(name) {
    const httpHeaders = new HttpHeaders({
      'Authorization': this.loginService.authentication
    });
    const options = {
      headers: httpHeaders
    };
    const new_url = `${this.itemUrl}/${name}`;
    console.log(new_url);
    return this.httpClient.delete<Item>(new_url, options);
  }
  editItem(item): Observable<Item> {
    const itemJSN = JSON.stringify(item);
    const new_url = this.itemUrl;
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : this.loginService.authentication
    });
    const options = {
      headers: httpHeaders
    };
    return this.httpClient.put<Item>(new_url, itemJSN, options);
  }
}
