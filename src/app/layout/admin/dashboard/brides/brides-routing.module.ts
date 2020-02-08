import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BridesComponent } from './brides.component';


const routes: Routes = [
  {path:'',component:BridesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BridesRoutingModule { }
