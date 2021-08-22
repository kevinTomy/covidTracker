import { Component, OnInit, SimpleChanges } from '@angular/core';
import {CoronaStatsService} from "../../shared/services/corona-stats.service";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
 
  todaysCount :Array<any> =[{
    cases: 'Cases',
    count: 0
  },
  {
    cases: 'Deaths',
    count: 0
  },
  {
    cases: 'Recovered',
    count: 0
  }];
  totalCount: Array<any> = [
    {
      cases: 'Total Cases',
      count: 0
    },
    {
      cases: 'Total Deaths',
      count: 0
    },
    {
      cases: 'Total Recovered',
      count: 0
    }
  ]; 
  constructor(private service : CoronaStatsService) { }

  /* ngOnChanges(changes:SimpleChanges) {

    if(changes.result?.currentValue){
      this.todaysCount[0].count = this.result.todayCases?.toLocaleString('en-in');
      this.todaysCount[1].count = this.result.todayDeaths?.toLocaleString('en-in');
      this.todaysCount[2].count = this.result.todayRecovered?.toLocaleString('en-in');
      this.totalCount[0].count = this.result.cases?.toLocaleString('en-in');
      this.totalCount[1].count = this.result.deaths?.toLocaleString('en-in');
      this.totalCount[2].count = this.result.recovered?.toLocaleString('en-in');
    }

  } */

  ngOnInit(): void {
    this.service.getCurrentStats().subscribe(res => {
      this.todaysCount[0].count = res.todayCases?.toLocaleString('en-in');
      this.todaysCount[1].count = res.todayDeaths?.toLocaleString('en-in');
      this.todaysCount[2].count = res.todayRecovered?.toLocaleString('en-in');
      this.totalCount[0].count = res.cases?.toLocaleString('en-in');
      this.totalCount[1].count = res.deaths?.toLocaleString('en-in');
      this.totalCount[2].count = res.recovered?.toLocaleString('en-in');
    });
  }

}
