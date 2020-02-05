import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultCompComponent } from './default-comp.component';


const routes: Routes = [
  {path:'',component:DefaultCompComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultCompRoutingModule { }
