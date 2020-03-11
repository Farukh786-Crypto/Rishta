import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoviewRoutingModule } from './photoview-routing.module';
import { PhotoviewComponent } from './photoview.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [PhotoviewComponent],
  imports: [
    CommonModule,
    PhotoviewRoutingModule,
    MaterialModule,
  
  ]
})
export class PhotoviewModule { }
