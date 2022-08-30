import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddProductComponent } from '../components/add-product/add-product.component';

@Injectable({
  providedIn: 'root'
})
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
