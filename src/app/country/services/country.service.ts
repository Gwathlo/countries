import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';
  private searchCountryPath: string = '/name/';


  constructor( private http: HttpClient ) { }

  searchCountry( termino: string ): Observable<any> {

    const url = `${ this.apiUrl }${ this.searchCountryPath }${ termino }`;
    return this.http.get( url );
  }


}
