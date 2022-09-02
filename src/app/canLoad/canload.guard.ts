import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanloadGuard implements CanLoad {
  canLoad(route: Route) {
    if(route.path === 'reports'){
      return false
    }
    return true;
  }
}
