import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Characters } from '../interfaces/characters';
import { Locations } from '../interfaces/locations';
import { Episodes } from '../interfaces/episodes';
@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  urlAPI = 'https://rickandmortyapi.com/api/';
  
  constructor(private httpClient: HttpClient) { }

  getCharacters(page: number): Observable<Characters> {
    return this.httpClient.get<Characters>(`${this.urlAPI}character?page=${page}`);
  }

  browser(name:string, page:number): Observable<Characters> {
    return this.httpClient.get<Characters>(`${this.urlAPI}character?page=${page}&name=${name}`);
  }

  getLocations(page: number): Observable<Locations>{
    return this.httpClient.get<Locations>(`${this.urlAPI}location?page=${page}`);
  }

  getEpisodies(page:number): Observable<Episodes> {
    return this.httpClient.get<Episodes>(`${this.urlAPI}episode?page=${page}`);
  }

  showDescription(): Observable<Characters> {
    return this.httpClient.get<Characters>(`${this.urlAPI}character`);
  }

}
