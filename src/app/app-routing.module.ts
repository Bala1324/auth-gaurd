import { NgModule } from '@angular/core';


import { NoPreloading, PreloadAllModules, RouterModule, Routes} from '@angular/router';


import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ReportsComponent } from './components/reports/reports.component';

import {AuthGuard} from './auth/auth.guard'
import { AuthChildGuard } from './child/auth-child.guard';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CanDeactivateGuard } from './deactivate/can-deactivate.guard';
import { PreLoadService } from './services/pre-load.service';
import { CanloadGuard } from './canLoad/canload.guard';
import { ResolveGuard } from './resolve/resolve.guard';

const routes: Routes = [{
  path:'', 
  component:LoginComponent},
{
  path:'home', 
  component:DashboardComponent,
  // canActivateChild:[AuthChildGuard],
  // canActivate:[AuthGuard],

  children:[
    {
      path:'contact',
      component:ContactComponent,
      // canActivate:[AuthGuard]
      
    },
    {
      path:'about',
      component:AboutComponent,
      // canActivate:[AuthGuard]
      // canLoad:[CanloadGuard]
      resolve:{
        post: ResolveGuard
      },
      
    },
    
    //   {path:'reports',
    //   component:ReportsComponent,
    //   // canActivate:[AuthGuard]
    // },
    // {
    //   path:'add-product',
    //   component:AddProductComponent,
    //   // canDeactivate:[CanDeactivateGuard]
    // }

    {
      path:'add-product',
      loadChildren: ()=> import('./components/add-product/add-product.module').then(m => m.AddProductModule),
      data:{myLoad:false},
      canLoad:[CanloadGuard]
    },
    {
      path:'reports',
      loadChildren: ()=> import('./components/reports/reports.module').then(m => m.ReportsModule),
      data:{myLoad:true},
      canLoad:[CanloadGuard]
    }
  ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreLoadService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
