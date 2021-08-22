import { Component, OnInit } from '@angular/core';
import {CoronaStatsService} from "../../shared/services/corona-stats.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentScreen:string="dashboard";
  coronaUpdates:Array<any>= [];
  constructor(private service : CoronaStatsService) { }

  ngOnInit(): void {

    this.service.getCurrentStats().subscribe(res => this.coronaUpdates = res);
  }
  switchTabs(text:string){
    text == 'countries' ? 
    (
      this.currentScreen = text,
      (document.getElementById('icon-flag') as HTMLElement).style.borderColor = "#54f966",
      (document.getElementById('icon-chart') as HTMLElement).style.borderColor = "#0058a3",
      (document.getElementById('icon-power') as HTMLElement).style.borderColor = "#0058a3" 

    )
    :
    (
      text == 'dashboard' ? 
      (
        this.currentScreen = text,
        (document.getElementById('icon-chart') as HTMLElement).style.borderColor = "#54f966" ,
        (document.getElementById('icon-flag') as HTMLElement).style.borderColor = "#0058a3",
        (document.getElementById('icon-power') as HTMLElement).style.borderColor = "#0058a3" 
      
      ) : 
      (
        this.currentScreen = text,
        (document.getElementById('icon-power') as HTMLElement).style.borderColor = "#54f966" ,
        (document.getElementById('icon-flag') as HTMLElement).style.borderColor = "#0058a3",
        (document.getElementById('icon-chart') as HTMLElement).style.borderColor= " #0058a3" 
      
      ) 
    )
    ;
    
  }

}
