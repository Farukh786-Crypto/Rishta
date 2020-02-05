import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { DefaultCompRoutingModule } from './default-comp-routing.module';
import { DefaultCompComponent } from './default-comp.component';


@NgModule({
  declarations: [DefaultCompComponent],
  imports: [
    CommonModule,
    DefaultCompRoutingModule
  ]
})
export class DefaultCompModule { }
