import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroomsComponent } from './grooms.component';


const routes: Routes = [
  {path:'',component:GroomsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroomsRoutingModule { }
