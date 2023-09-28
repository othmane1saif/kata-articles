import { Component, OnInit } from '@angular/core';
import {CartArticle} from "../../model/cartArticle";
import {Category} from "../../enums/Category";
import {TaxePipe} from "../../pipes/taxe.pipe";
import {ArrondiPipe} from "../../pipes/arrondi.pipe";
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartArticles: CartArticle[] = [];

  constructor(private pricePipe: TaxePipe, private arrondiPipe: ArrondiPipe,
              private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.cartArticles = <CartArticle[]>JSON.parse(<string>localStorage.getItem('cart'));
    this.localStorageService.getCartSubject().next(this.cartArticles);
  }

  getCategory(category: string) {
    return (<Category> category);
  }

  removeArticleFromCart(id: number) {
    this.cartArticles = this.cartArticles.filter(cartEle => cartEle.article.id != id);
    localStorage.setItem('cart', JSON.stringify(this.cartArticles));
    this.localStorageService.getCartSubject().next(this.cartArticles);
  }

  /**
   * <p>J'ai appelé l'arrondi sur chaque élement calculé pour ne pas avoir du soucis dans le résultat.
   * ex 0.01 devient 0.05 si je fait la somme avant l'arrondi des deux articles dont la taxe est 0.01 cela donne 0.02,
   * avec l'arrondi cela devient 0.05. par contre si j'applique l'arrondi avant de faire la somme j'aurai 0.10
   * </p>
   *
   */
  getTotalTaxes(): number {
    let totalTaxe = 0;
    this.cartArticles.forEach(cartElement => {
      totalTaxe += this.arrondiPipe.transform(this.pricePipe.
      transform(cartElement.article.price, cartElement.article.category, cartElement.article.isImported), 20)
        * cartElement.quantity;
    });
    return totalTaxe;
  }

  getTotalHorsTaxes() {
    let totalHt = 0;
    this.cartArticles.forEach(cartElement => totalHt += cartElement.article.price * cartElement.quantity);
    return totalHt;
  }
}
