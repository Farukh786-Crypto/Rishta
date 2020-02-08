import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {AdminAuthGuard} from '../Guard/admin-auth.guard';


const routes: Routes = [
  {
    path:'',component:LayoutComponent,children: [

        {path:'',redirectTo:'layout',pathMatch:'full',canActivate:[AdminAuthGuard]},
        {path:'brides',loadChildren:'./admin/dashboard/brides#BridesModule',canActivate:[AdminAuthGuard]},
        {path:'grooms',loadChildren:'./admin/dashboard/grooms#GroomsModule',canActivate:[AdminAuthGuard]},
        {path:'dashboard',loadChildren:'./admin/dashboard/dashboard#DashboardModule',canActivate:[AdminAuthGuard]},
        {path:'view',loadChildren:'./admin/dashboard/view#ViewModule',canActivate:[AdminAuthGuard]}
        
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
