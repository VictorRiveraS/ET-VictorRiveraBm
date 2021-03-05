import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiNoticiasService {

  public apikey2 = 'b7eed13eea4a4a8e9714add4f1ffe56b'
  public country: any
  public category: any
  public url: any

  constructor(private http: HttpClient) { } 

  public getNoti(country: string, category: string) {
    let url = country === '' ? 'category=' + category : 'country=' + country + '&category=' + category;

    return this.http.get(`https://newsapi.org/v2/top-headlines?${url}&apiKey=${this.apikey2}`);
  }
  
}
