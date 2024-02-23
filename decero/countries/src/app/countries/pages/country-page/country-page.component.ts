import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ActivatedRoute, Route } from '@angular/router';
import { switchMap } from 'rxjs';
import { Router } from '@angular/router';

import { Country } from '../../interfaces/country-interface';
import { VulnerabilityService } from '../../services/vulnerability.service';

@Component({
  selector: 'country-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})


export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(private countriesService: CountriesService
    , private activatedRoute: ActivatedRoute
    , private router: Router
    , private vulnerability: VulnerabilityService) { }




  ngOnInit(): void {

    this.vulnerability.loadConfig ();
    this.vulnerability.getConfig ();
    this.vulnerability.getApiKey ();


    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchCountryByCode(id)))

      .subscribe((result) => {

        if (!result) {
          this.router.navigateByUrl('/countries');
          return;
        }
        else {
          console.log("País", result);
          this.country = result;
        }

      });

  }
}
