import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountries } from '../../interfaces/i-country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable<ICountries> {
    return this.http.get<ICountries>(' https://api.nationalize.io/?name=nathaniel')
  }

}
