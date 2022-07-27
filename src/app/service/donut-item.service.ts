import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donutdetails } from '../interface/donutdetails';
import { Donuts,DonutResults } from '../interface/donutitem';

@Injectable({
  providedIn: 'root'
})
export class DonutItemService {

  constructor( private http: HttpClient) { }

fetchAllDonutInfo(): Observable<Donuts>{
  return this.http.get<Donuts>("https://grandcircusco.github.io/demo-apis/donuts.json");
}
fetchAllDonutById(id:number): Observable<Donutdetails>{
  const url ="https://grandcircusco.github.io/demo-apis/donuts/"+id+".json";
  return this.http.get<Donutdetails>(url);
}
}
