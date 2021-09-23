import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {AlertPopupComponent} from "../../shared/components/alert-popup/alert-popup.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginCred= {
      username : 'admin',
      pwd: 'admin'
    };
    loginFG = new FormGroup(
    {
      username : new FormControl('',Validators.required),
      pwd : new FormControl('',Validators.required)
    });
  constructor(private dialog : MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    //console.log(this.loginFG);
  }

  authenticateUser(){
    if(JSON.stringify(this.loginFG.value) == JSON.stringify(this.loginCred)){
     /*  let dialogRef = this.dialog.open(AlertPopupComponent, {
        width : '18.5rem',
        height: '5rem'
      });
      dialogRef.componentInstance.success = true;
      dialogRef.componentInstance.alert = true;
      dialogRef.componentInstance.message = "Success!"; */
      window.localStorage.setItem("isLoggedIn", "true");
      this.router.navigate(['/dashboard']);
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
