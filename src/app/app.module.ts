
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FlexLayoutModule} from "@angular/flex-layout";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';


import { LoginComponent } from './components/login/login.component';
import { InputComponent } from './shared/controls/input/input.component';
import { AlertPopupComponent } from './shared/components/alert-popup/alert-popup.component';
import { StatsComponent } from './components/stats/stats.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputComponent,
    AlertPopupComponent,
    StatsComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
