import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country-interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})

export class ByCapitalPageComponent implements OnInit{

  public countryList: Country[] = [];
  public term: string = "";

  public isLoading: boolean = false;

  searchByCapital(term: string): void {
    this.isLoading  = true;

    console.log("Desde byCapitalPage");
    console.log({ term });

    this.countriesService.searchCapital(term).subscribe(
      (countries) => {
        this.countryList = countries;
        this.isLoading = false;
      }
    );

      console.log(this.countryList);
  }

  // Inject the CountriesService
  constructor(private countriesService: CountriesService) { }
  ngOnInit(): void {

    this.countryList = this.countriesService.cacheStore.byCapital.data;
    this.term = this.countriesService.cacheStore.byCapital.term;

  }

}
