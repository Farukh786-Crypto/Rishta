import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
// import { AdminAuthGuard } from '../Guard/admin-auth.guard';
import {AdminAuthGuard} from '../Guard/admin-auth.guard';


const routes: Routes = [
  {
    path:'',component:LayoutComponent,children: [

        {path:'',redirectTo:'layout',pathMatch:'full',canActivate:[AdminAuthGuard]},
        // {path:'',loadChildren:}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
