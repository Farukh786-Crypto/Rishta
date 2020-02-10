import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { viewComponent } from './view.component';


const routes: Routes = [
  {path:'',component:viewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
