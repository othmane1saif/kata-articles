import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {CartArticle} from "../model/cartArticle";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private cartSubject = new Subject<CartArticle[]>();

  getCartSubject() {
    return this.cartSubject;
  }
}
