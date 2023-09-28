import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "../model/article";


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>('../../assets/articles.json');
  }
}
