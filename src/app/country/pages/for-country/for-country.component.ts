import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html',
  styles: [],
})
export class ForCountryComponent {
  termino: string = '';
  error: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(termino: string) {
    this.error = false;
    this.termino = termino;
    this.countryService.searchCountry(this.termino).subscribe(
      (countries) => {
        console.log(countries);
        this.countries = countries;
      },
      (err) => {
        this.error = true;
        this.countries = [];
      }
    );
  }
}
