import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html',
  styles: [
  ]
})
export class ForCountryComponent {

termino: string = '';
error: boolean = false;

constructor( private countryService: CountryService) { }

search() {
  this.error = false;
  this.countryService.searchCountry( this.termino )
    .subscribe( (countries) => {
      console.log(countries);
      
    }, (err) => {
      this.error = true;
      
    });
}

}
