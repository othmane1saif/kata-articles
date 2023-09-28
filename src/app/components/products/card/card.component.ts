import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Article} from "../../../model/article";
import {CartArticle} from "../../../model/cartArticle";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{

  @Input()
  article!: Article;

  @Input()
  cartArticles!: CartArticle[];

  @Output()
  addToCart: EventEmitter<CartArticle[]> = new EventEmitter();

  quantity: string = '1';

  addArticleToCart(selectedArticle: Article) {
    const article: CartArticle = {article: selectedArticle, quantity: Number.parseInt(this.quantity)};
    this.addArticles(article, this.cartArticles);
    this.quantity = '1';
  }


  private addArticles(article: CartArticle, cartArticles: CartArticle[]) {
    let anyMatch = false;
    cartArticles.forEach(articleEle => {
      if (articleEle.article.id== article.article.id) {
        articleEle.quantity =  article.quantity.valueOf() + articleEle.quantity.valueOf();
        anyMatch = true;
      }
    });
    if (!anyMatch) cartArticles.push(article);
    this.addToCart.emit(cartArticles);
  }

  /**
   * the objective an empty list. The size of the list should be equal quantity.
   * this method verify also if there is an article in the cart
   * @param article
   */
  getQuantity(article: Article) {
    let quantity;
    // first we should verify if the product is in the cart
    // if so we should calculated the quantity rest that we can order
      let tmpQuantity = 0;
      this.cartArticles.forEach(cartElement => {
        if (cartElement.article.id == article.id) {tmpQuantity = cartElement.quantity}
      });
      quantity = article.quantity - tmpQuantity;
    return [].constructor(quantity);
  }
}
