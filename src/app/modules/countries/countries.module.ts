import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from "@angular/material/sort";
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';


@NgModule({
  declarations: [
    CountriesComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule
  ]
})
export class CountriesModule { }
