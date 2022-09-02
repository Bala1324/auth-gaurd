import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreLoadService implements PreloadingStrategy {
  preload(route: Route, myPreLoad: () => Observable<any>): Observable<any> {
    if(route.data && route.data['myLoad']){
      myPreLoad();
    }
    return of(null)
  }

  constructor() { }
}
