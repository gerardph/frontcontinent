import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Continents } from './continents';
import { CreateOrUpdateContinent } from './create-or-update-continent';
import { Search } from './tous-les-continents/search';

@Injectable({
  providedIn: 'root'
})
export class ContinentsService {

  constructor(private http:HttpClient) { }
  get(search:Search){
    let params = new HttpParams();
    if(search.code!=''){
      params=params.append('code',search.code);
    }
    if(search.kw!=''){
      params= params.append('kw',search.kw);
    }
    if(search.lang!=''){
      params=params.append('lang',search.lang);
    }
    return this.http.get<Continents[]>("http://localhost:3000/continents/search",{params: params});
  }
  create(continent:CreateOrUpdateContinent){
    return this.http.post<Continents>('http://localhost:3000/continents',continent);
  }
}
