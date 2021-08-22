import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {AlertPopupComponent} from "../../shared/components/alert-popup/alert-popup.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginCred= {
      username : 'fingent',
      pwd: 'fingent'
    };
    loginFG = new FormGroup(
    {
      username : new FormControl('',Validators.required),
      pwd : new FormControl('',Validators.required)
    });
  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
    //console.log(this.loginFG);
  }

  authenticateUser(){
    if(JSON.stringify(this.loginFG.value) == JSON.stringify(this.loginCred)){
      let dialogRef = this.dialog.open(AlertPopupComponent, {
        width : '18.5rem',
        height: '5rem'
      });
      dialogRef.componentInstance.success = true;
      dialogRef.componentInstance.alert = true;
      dialogRef.componentInstance.message = "Success!";
    }
    else {
      let dialogRef = this.dialog.open(AlertPopupComponent, {
        width : '18.5rem',
        height: '5rem'
      });
      dialogRef.componentInstance.alert = true;
      dialogRef.componentInstance.message = "Incorrect Username or Password";
    }
    
  }

}
