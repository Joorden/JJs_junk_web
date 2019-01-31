import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemComponent } from './store/items/item/item.component';
import { CartComponent } from './store/cart/cart.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { ItemsComponent } from './store/items/items.component';
import { DetailesComponent } from './store/items/detailes/detailes.component';
import { StoreComponent } from './store/store.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup/signup.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './store/home/home.component';
import {ItemService} from './service/item.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'loggingIn', component: LoginComponent},
  { path: 'store', component: StoreComponent},
  { path: 'cart', component: CartComponent},
  { path: 'home', component: HomeComponent},
  {path: 'signUp', component: SignupComponent}
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
    SignupComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}),
    HttpClientModule,
    FormsModule
  ],
  providers: [ItemService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
