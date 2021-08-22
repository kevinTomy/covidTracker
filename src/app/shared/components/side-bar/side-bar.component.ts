import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  currentScreen: string = 'dashboard';
  coronaUpdates:Array<any>= [];
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  switchTabs(text:string){
    text == 'countries' ? 
    (
      this.currentScreen = text,
      (document.getElementById('icon-flag') as HTMLElement).style.borderColor = "#54f966",
      (document.getElementById('icon-chart') as HTMLElement).style.borderColor = "#0058a3",
      (document.getElementById('icon-power') as HTMLElement).style.borderColor = "#0058a3",
      this.router.navigate(['/countries'])
    )
    :
    (
      text == 'dashboard' ? 
      (
        this.currentScreen = text,
        (document.getElementById('icon-chart') as HTMLElement).style.borderColor = "#54f966" ,
        (document.getElementById('icon-flag') as HTMLElement).style.borderColor = "#0058a3",
        (document.getElementById('icon-power') as HTMLElement).style.borderColor = "#0058a3" ,
        this.router.navigate(['/dashboard'])
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
