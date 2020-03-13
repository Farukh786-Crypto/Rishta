import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoviewComponent } from './photoview.component';


const routes: Routes = [
  { path:'',component:PhotoviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoviewRoutingModule { }
