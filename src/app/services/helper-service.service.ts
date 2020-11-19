import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private httpClient: HttpClient) {}
  public loading: boolean = true;
  private apiUrl: string = 'https://localhost:44395/api/helper';

  public sendContactEmail(contact: Contact) {
    return this.httpClient.post(`${this.apiUrl}/SendConcactEmail`, contact);
  }
}
