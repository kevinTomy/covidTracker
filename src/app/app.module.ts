

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { LoginComponent } from './components/login/login.component';
/* import { InputComponent } from './shared/controls/input/input.component';
import { AlertPopupComponent } from './shared/components/alert-popup/alert-popup.component'; */
import { StatsComponent } from './components/stats/stats.component';
//import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import {SharedModule} from "./shared/shared.module";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StatsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
