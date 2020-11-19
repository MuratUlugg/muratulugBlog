import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Http istekleri için import
import { Category } from '../models/category'; // Model import

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl: string = 'https://localhost:44395/api/categories';

  constructor(private httpClient: HttpClient) {}

  public getCategories() {
    return this.httpClient.get<Category[]>(this.apiUrl);
  }

  public getCategoriesById(id: number) {
    let url = `${this.apiUrl}/${id}`; //backtick string ifadeler daha iyi  ``
    return this.httpClient.get<Category>(url);
  }
}
