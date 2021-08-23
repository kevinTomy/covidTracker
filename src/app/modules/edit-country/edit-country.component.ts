import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.scss']
})
export class EditCountryComponent implements OnInit {
  countryName: string = "";
  constructor(private router : Router) { }
  countryFG = new FormGroup({
    case : new FormControl('',[Validators.required, this.numberCheck]),
    death : new FormControl('', [Validators.required, this.numberCheck]),
    recover: new FormControl('', [Validators.required, this.numberCheck]),
    test: new FormControl('', [Validators.required, this.numberCheck])
  });
  updatedCountryDetails = {
    cases:"",
    country: "",
    deaths: "",
    flag: "",
    population: "",
    recovered: "",
    tests: ""
   }
  ngOnInit(): void {

    if(history.state.details){
     this.updatedCountryDetails = {
        cases: history.state.details?.cases,
        country: history.state.details?.country,
        deaths: history.state.details?.deaths,
        flag: history.state.details?.flag,
        population: history.state.details?.population,
        recovered: history.state.details?.recover,
        tests: history.state.details?.test
       }
    }
  }

  updateDetails(){
    this.updatedCountryDetails = {
      cases: this.countryFG.value.case,
      country: history.state.details?.country,
      deaths: this.countryFG.value.death,
      flag: history.state.details?.flag,
      population: history.state.details?.population,
      recovered: this.countryFG.value.recover,
      tests: this.countryFG.value.test
     };

     this.router.navigate(['/countries'], {
       state : {updatedCountryDetails : this.updatedCountryDetails}
     });
  }

   numberCheck(control: AbstractControl): { [key: string]: boolean } | null{

    if (!control.value.trim().length){
      return {'emptyValue' : true};
    }
    else if(!(/^[0-9]+$/).test(control.value)){
      return {'nan' : true};
    }
    return null;
  }

  goBack(){
    console.log(this.countryFG.get('case')?.errors);
  }

}
