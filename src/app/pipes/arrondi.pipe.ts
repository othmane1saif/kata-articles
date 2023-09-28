import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrondi'
})
export class ArrondiPipe implements PipeTransform {

  transform(price: number, valeurArrondi: number): number {
    return Math.ceil(price * valeurArrondi) / valeurArrondi;
  }

}
