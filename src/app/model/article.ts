import {Category} from "../enums/Category";

export interface Article {
  id: number,
  productName: string,
  price: number,
  quantity: number,
  isImported: boolean,
  category: Category
}
