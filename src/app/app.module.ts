import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductsComponent} from "./components/products/products.component";
import {CartComponent} from "./components/cart/cart.component";
import {HttpClientModule} from "@angular/common/http";
import { CardComponent } from './components/products/card/card.component';
import { TaxePipe } from './pipes/taxe.pipe';
import { ArrondiPipe } from './pipes/arrondi.pipe';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    CardComponent,
    TaxePipe,
    ArrondiPipe,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TaxePipe, ArrondiPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
