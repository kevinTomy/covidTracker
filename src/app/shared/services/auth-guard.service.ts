import { Injectable } from '@angular/core';
import {Router, CanActivate} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router : Router) { }

  canActivate():boolean {
    if(window.localStorage.getItem('isLoggedIn')){
      return true;
    }
  
      this.router.navigate(['/login']);
      return false;
    
    
  }
}
