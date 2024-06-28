import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  urlAPI = 'https://rickandmortyapi.com/api/character?page=';
  
  constructor(private httpClient: HttpClient) { }

  getCharacters(page: number): Observable<any> {
    return this.httpClient.get(`${this.urlAPI}${page}`);
  }

  browser(name:string, page:number): Observable<any> {
    return this.httpClient.get(`${this.urlAPI}${page}&name=${name}`);
  }
}
