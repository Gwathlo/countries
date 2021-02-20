import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForCapitalComponent } from './pages/for-capital/for-capital.component';
import { ForCountryComponent } from './pages/for-country/for-country.component';
import { ForRegionComponent } from './pages/for-region/for-region.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';



@NgModule({
  declarations: [ForCapitalComponent, ForCountryComponent, ForRegionComponent, ViewCountryComponent],
  exports: [
    ForCapitalComponent, ForCountryComponent, ForRegionComponent, ViewCountryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CountryModule { }
