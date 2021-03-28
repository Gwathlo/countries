import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styles: [],
})
export class ViewCountryComponent implements OnInit {
  country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.getCountryByCode(id)),
        tap(console.log)
      )
      .subscribe((country) => (this.country = country));
    // this.activatedRoute.params.subscribe(({ id }) => {
    //   console.log(id);
    //   this.countryService.getCountryByCode(id).subscribe(
    //     (country) => {
    //       console.log(country);
    //       this.country = country;
    //     },
    //     (err) => {
    //       this.error = true;
    //       this.country = new Country();
    //     }
    //   );
    // });
  }
}
