import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Continents } from './continents';
import { CreateOrUpdateContinent } from './create-or-update-continent';

@Injectable({
  providedIn: 'root'
})
export class ContinentsService {

  constructor(private http:HttpClient) { }
  get(){
    return this.http.get<Continents[]>("http://localhost:3000/continents")
  }
  create(continent:CreateOrUpdateContinent){
    return this.http.post<Continents>('http://localhost:3000/continents',continent);
  }
}
