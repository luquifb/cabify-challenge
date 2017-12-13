import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CountriesService {
  public BASEURL = 'https://restcountries.eu/rest/v2';
  country:object;

  constructor(private http: Http) { }

  getCountries() {
    return this.http.get(`${this.BASEURL}/all`)
          .map((res) => res.json());
  }
}
