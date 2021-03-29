import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ForCountryComponent {
  termino: string = '';
  error: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggestions: boolean = false;

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

  suggestions(termino: string) {
    this.error = false;
    this.termino = termino;
    this.showSuggestions = true;
    this.countryService.searchCountry(termino).subscribe(
      (countries) => (this.suggestedCountries = countries.splice(0, 5)),
      (err) => (this.suggestedCountries = [])
    );
  }

  searchSuggestion(termino: string) {
    this.search(termino);
    this.showSuggestions = false;
  }
}
