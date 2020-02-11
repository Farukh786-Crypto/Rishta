import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {AdminAuthGuard} from '../Guard/admin-auth.guard';


const routes: Routes = [
  {
    path:'',component:LayoutComponent,children: [

        {path:'',redirectTo:'dashboard',pathMatch:'full',canActivate:[AdminAuthGuard]},
        {path:'brides',loadChildren:'./admin/dashboard/brides/brides.module#BridesModule',canActivate:[AdminAuthGuard]},
        {path:'grooms',loadChildren:'./admin/dashboard/grooms/grooms.module#GroomsModule',canActivate:[AdminAuthGuard]},
        {path:'dashboard',loadChildren:'./admin/dashboard/dashboard.module#DashboardModule',canActivate:[AdminAuthGuard]},
<<<<<<< HEAD
         {path:'view',loadChildren:'./admin/dashboard/view/view.module#ViewModule',canActivate:[AdminAuthGuard]}
=======
        {path:'view',loadChildren:'./admin/dashboard/view/view.module#ViewModule',canActivate:[AdminAuthGuard]}
>>>>>>> a50f39d5577a1decd2f6d94e5b86c571a45103bf
        
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
