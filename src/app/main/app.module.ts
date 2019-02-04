import { BrowserModule } from '@angular/platform-browser';
import {Directive, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemComponent } from './store/items/item/item.component';
import { CartComponent } from './store/cart/cart.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { ItemsComponent } from './store/items/items.component';
import { DetailesComponent } from './store/items/detailes/detailes.component';
import { StoreComponent } from './store/store.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './store/home/home.component';
import {ItemService} from './service/item.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './store/login/login.component';
import {EditComponent} from './store/edit/edit.component';
import {AddComponent} from './store/edit/add/add.component';
import {UserComponent} from './store/user/user.component';
import {ProtectedDirective} from './protected.directive';



const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'loggingIn', component: LoginComponent},
  { path: 'store', component: StoreComponent},
  { path: 'cart', component: CartComponent},
  { path: 'home', component: HomeComponent},
  {path: 'edit', component: EditComponent},
  {path: 'add', component: AddComponent},
  {path: 'users', component: UserComponent},
  {path: 'thanks', component: CheckoutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemComponent,
    CartComponent,
    CheckoutComponent,
    ItemsComponent,
    DetailesComponent,
    StoreComponent,
    LoginComponent,
    HomeComponent,
    EditComponent,
    AddComponent,
    UserComponent,
    ProtectedDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: false}),
    HttpClientModule,
    FormsModule,
  ],
  providers: [ItemService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
