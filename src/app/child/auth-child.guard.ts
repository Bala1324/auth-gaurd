import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthChildGuard implements CanActivateChild {
  constructor( private router:Router){

  }
  canActivateChild(){
    if(!!localStorage.getItem('login')){
      return true;
    }
    alert('Please Login')
   this.router.navigate([''])
     return false
   
  }  }
  

