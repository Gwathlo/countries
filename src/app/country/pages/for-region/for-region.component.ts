import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-region',
  templateUrl: './for-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class ForRegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activatedRegion: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  getClass(region: string): string {
    return region === this.activatedRegion
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activeRegion(region: string) {
    if (region !== this.activatedRegion) {
      this.activatedRegion = region;
      this.countries = [];
      this.countryService
        .searchByRegion(region)
        .subscribe((countries) => (this.countries = countries));
    }
  }
}
