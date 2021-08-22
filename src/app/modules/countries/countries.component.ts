import { Component, OnInit } from '@angular/core';
import {CoronaStatsService} from "../../shared/services/corona-stats.service";
import {CountryDetails} from "../../shared/models/country-details.model";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countriesDetails : any;
  constructor(private statService:CoronaStatsService) { }

  ngOnInit(): void {
  this.statService.getCountryWiseStats().subscribe(res => {
    this.countriesDetails =   res.map((d:any) => {
        return new CountryDetails(d.country,d.cases,
          d.deaths,d.recovered,d.tests,
          d.population,d.countryInfo?.flag);
      });

      //console.log(this.countriesDetails);
    });
  }

}
