import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';
// import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.eu/rest/v2';
  private searchCountryPath: string = '/name/';
  private searchCapitalPath: string = '/capital/';
  private searchRegion: string = '/region/';
  private getCountryPath: string = '/alpha/';
  private fields: string = 'name;capital;alpha2Code;flag;population';

  get httpParams() {
    return new HttpParams().set('fields', this.fields);
  }

  constructor(private http: HttpClient) {}

  searchCountry(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}${this.searchCountryPath}${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
    // return this.http.get( url )
    //         .pipe(
    //           catchError( err => of([]) )
    //         );
  }

  searchCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}${this.searchCapitalPath}${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  getCountryByCode(id: string): Observable<Country> {
    const url = `${this.apiUrl}${this.getCountryPath}${id}`;
    return this.http.get<Country>(url);
  }

  searchByRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}${this.searchRegion}${region}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
