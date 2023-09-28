import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {Article} from "../../model/article";
import {LocalStorageService} from "../../services/local-storage.service";
import {CartArticle} from "../../model/cartArticle";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  articles: Article[] = [];
  cartArticles: CartArticle[] = [];


  constructor(private articleServices: ArticleService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    if(localStorage.getItem('cart') != null) {
     const cartArticles = <CartArticle[]>JSON.parse(<string>localStorage.getItem('cart'));
     this.addToCart(cartArticles);
    }
    this.articleServices.getArticles().subscribe(articlesResponse => this.articles = articlesResponse);
  }


  addToCart(articles: CartArticle[]) {
    this.cartArticles = articles;
    this.localStorageService.getCartSubject().next(articles);
    localStorage.setItem('cart', JSON.stringify(articles));
  }
}
