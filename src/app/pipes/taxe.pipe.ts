import {Pipe, PipeTransform} from '@angular/core';
import {Category} from "../enums/Category";

@Pipe({
  name: 'taxe'
})
export class TaxePipe implements PipeTransform {

  transform(price: number, category: Category, isImported: boolean): number {
    let calculatedTaxe = 0;
    if (isImported) {
      calculatedTaxe = price * 0.05;
    }
    switch (category){
      case Category.FOOD:
      case Category.MEDECINE:
        break;
      case Category.BOOKS:
        calculatedTaxe = calculatedTaxe + price * 0.1;
        break;
      default:
        calculatedTaxe = calculatedTaxe + price * 0.2;
        break;
    }
    return calculatedTaxe;
  }

}
