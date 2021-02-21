import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html',
  styles: [
  ]
})
export class ForCountryComponent {

termino: string = 'Hi world';

constructor( private countryService: CountryService) { }

search() {
  this.countryService.searchCountry( this.termino )
    .subscribe ( resp => {
      console.log(resp);
      
    });
}

}
