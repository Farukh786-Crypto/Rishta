import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroomsComponent } from './grooms.component';


const routes: Routes = [
  {path:'',component:GroomsComponent,children:[
    //{path:'view',loadChildren:'./admin/dashboard/view/view.module#ViewComponent'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GroomsRoutingModule { }
