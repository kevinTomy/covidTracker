import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {AlertPopupComponent} from "./components/alert-popup/alert-popup.component";
import {SideBarComponent} from "./components/side-bar/side-bar.component";
import {InputComponent} from "./controls/input/input.component";
//import {CountryDetails} from "./models/country-details.model";

import {FlexLayoutModule} from "@angular/flex-layout";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from "@angular/material/sort";
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
    declarations: [
      InputComponent,
      AlertPopupComponent,
      SideBarComponent,
      //CountryDetails,
    ],
    imports: [
      CommonModule, 
      FormsModule,
      ReactiveFormsModule,
      FlexLayoutModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatDialogModule,
      MatTooltipModule,
      HttpClientModule,
      MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ],
    exports : [
        InputComponent,
        AlertPopupComponent,
        SideBarComponent,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
        MatTooltipModule,
        HttpClientModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        //CountryDetails,
    ]
  })

  export class SharedModule { }