import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroomsComponent } from './grooms.component';


const routes: Routes = [
  {path:'',component:GroomsComponent,children:[
<<<<<<< HEAD
   // {path:'view',loadChildren:'./admin/dashboard/view/view.module#ViewModule'}
=======
    //{path:'view',loadChildren:'./admin/dashboard/view/view.module#ViewModule'}
>>>>>>> a50f39d5577a1decd2f6d94e5b86c571a45103bf
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroomsRoutingModule { }
