import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {
  constructor(private service:AuthService){

  }
  
resolve() {
  return [{id:1,path:'hello',title:'Resolve'},{id:1,path:'hello',title:'Resolve'},{id:1,path:'hello',title:'Resolve'},{id:1,path:'hello',title:'Resolve'}]
}

  
}
