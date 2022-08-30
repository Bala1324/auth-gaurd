import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ReportsComponent } from './components/reports/reports.component';

import {AuthGuard} from './auth/auth.guard'
import { AuthChildGuard } from './child/auth-child.guard';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CanDeactivateGuard } from './deactivate/can-deactivate.guard';

const routes: Routes = [{
  path:'', 
  component:LoginComponent},
{
  path:'home', 
  component:DashboardComponent,
  // canActivateChild:[AuthChildGuard],

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
    },
    
      {path:'reports',
      component:ReportsComponent,
      // canActivate:[AuthGuard]
    },{
      path:'add-product',
      component:AddProductComponent,
      canDeactivate:[CanDeactivateGuard]
    }
  ],
  // canActivate:[AuthGuard]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
