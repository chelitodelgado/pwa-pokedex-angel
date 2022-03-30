import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { PokedexResponse } from '../models/pokedex.model';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  baseUrl: string = environment.baseUrl;

  constructor(private _http: HttpClient) {}

  getCatalogo(item: number) {
    const url = `${this.baseUrl}pokemon/${item}`;

    return this._http.get<PokedexResponse>(url);
  }

  getPokemon( pokemon: string ) {
    const url = `${this.baseUrl}pokemon/${pokemon}`;

    return this._http.get<PokedexResponse>(url);
  }

}
