import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCountryRoutingModule } from './edit-country-routing.module';
import { EditCountryComponent } from './edit-country.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    EditCountryComponent
  ],
  imports: [
    CommonModule,
    EditCountryRoutingModule,
    SharedModule
  ]
})
export class EditCountryModule { }
