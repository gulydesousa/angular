import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country-interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {
  public countryList: Country[] = [];
  public term: string = "";

  searchByCountry(term: string): void {
    console.log("Desde byCapitalPage");
    console.log({ term });

    this.countriesService.searchCountry(term).subscribe(
      (countries) => {
        this.countryList = countries;
      }
    );

      console.log(this.countryList);
  }

  // Inject the CountriesService
  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countryList = this.countriesService.cacheStore.byCountry.data
    this.term = this.countriesService.cacheStore.byCountry.term
  }
}
