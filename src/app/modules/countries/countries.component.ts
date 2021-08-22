import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {CoronaStatsService} from "../../shared/services/corona-stats.service";
import {CountryDetails} from "../../shared/models/country-details.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit , AfterViewInit {
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  countriesDetails : any;
  dataSource:MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns: Array<string> = [
    'flag',
    'country',
    'cases',
    'deaths',
    'recovered',
    'tests',
    'population',
    'edit'
  ] ;
 
  constructor(private statService:CoronaStatsService) { }

  ngOnInit(): void {
  this.statService.getCountryWiseStats().subscribe(res => {
    this.countriesDetails =   res.map((d:any) => {
        return new CountryDetails(d.country,d.cases,
          d.deaths,d.recovered,d.tests,
          d.population,d.countryInfo?.flag);
      });
      this.dataSource.data = JSON.parse(JSON.stringify(this.countriesDetails));
      //console.log(this.countriesDetails);
    });
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }

}
