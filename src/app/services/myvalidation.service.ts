import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class MyvalidationService {
  constructor() {}

  getValidationMessage(f: AbstractControl, name: string) {
    if (f.errors) {
      for (let errorName in f.errors) {
        if (errorName == 'required') {
          return `${name} Alanı Boş Bırakılamaz !!!  `;
        } else if (errorName == 'email') {
          return `${name} Alanı Mail Formatı Doğru Değil !!!  `;
        } else if (errorName == 'minlength') {
          return `${name} Alanı En Az 10 Karakter Olmalıdır !!!  `;
        }
      }
    }
  }
}
