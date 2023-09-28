import { Component, OnInit } from '@angular/core';
import {CartArticle} from "../../model/cartArticle";
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  cartArticles: CartArticle[] = [];

  constructor(private localStorageService: LocalStorageService) {

  }

  ngOnInit(): void {
    this.localStorageService.getCartSubject().subscribe({
      next: (res) => this.cartArticles = res
    })
  }

}
