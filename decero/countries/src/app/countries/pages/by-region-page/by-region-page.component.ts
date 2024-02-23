import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country-interface';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

  public countryList: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public activeRegion?: Region = undefined;

  searchByRegion(term: Region): void {
    console.log("Desde byRegionPage");
    console.log({ term });

    this.activeRegion  = term;

    this.countriesService.searchRegion(term).subscribe(
      (countries) => {
        this.countryList = countries;
      }
    );
    console.log(this.countryList);
  }

  // Inject the CountriesService
  constructor(private countriesService: CountriesService) { }
  ngOnInit(): void {
    this.countryList = this.countriesService.cacheStore.byRegion.data
    this.activeRegion = this.countriesService.cacheStore.byRegion.term
  }


}
