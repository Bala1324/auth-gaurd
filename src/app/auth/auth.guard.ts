import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddProductComponent } from '../components/add-product/add-product.component';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service:AuthService, private router:Router){

  }
  canActivate(){
  //   if(!!localStorage.getItem('login')){
  //     return true;
  //   }
  //   alert('Please Login')
  //  this.router.navigate([''])
  //    return false

  if(!!localStorage.getItem('login')){
    return true;
  }else{
    this.router.navigate([''])
    return false
  }

   
  }
  
}


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


  export class CanDeactivateGuard implements CanDeactivate<AddProductComponent> {
    canDeactivate(component: AddProductComponent){
  
      if(component.userForm.dirty){
       let returnedData = confirm('when you leave this page you will lose your datas!')
      console.log(returnedData)
      if(!returnedData){
          return false
      }
      }
      return true;
    }
    
  }
  
