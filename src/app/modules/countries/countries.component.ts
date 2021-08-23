import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {CoronaStatsService} from "../../shared/services/corona-stats.service";
import {CountryDetails} from "../../shared/models/country-details.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {FormControl} from "@angular/forms";
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit , AfterViewInit {
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator; 
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
  searchControl = new FormControl();
  constructor(private statService:CoronaStatsService) { }

  ngOnInit(): void {
    this.initialLoad();

    this.searchControl.valueChanges.subscribe(res =>{
      if(res){
        this.countriesDetails = this.countriesDetails.filter((obj:any) => {
          return obj.country.toLowerCase().includes(res.toLowerCase().trim())
        });
        this.dataSource.data = JSON.parse(JSON.stringify(this.countriesDetails));
      }
      else {
        this.initialLoad();
      }
     
    });
  }

  initialLoad(){
    this.statService.getCountryWiseStats().subscribe(res => {
      this.countriesDetails =   res.map((d:any) => {
          return new CountryDetails(d.country,d.cases.toLocaleString('en-in'),
            d.deaths.toLocaleString('en-in'),d.recovered.toLocaleString('en-in'),d.tests.toLocaleString('en-in'),
            d.population.toLocaleString('en-in'),d.countryInfo?.flag);
        });
        this.dataSource.data = JSON.parse(JSON.stringify(this.countriesDetails));
        //console.log(this.countriesDetails);
      });
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
