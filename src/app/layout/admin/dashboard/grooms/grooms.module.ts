import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroomsRoutingModule } from './grooms-routing.module';
import { GroomsComponent } from './grooms.component';


@NgModule({
  declarations: [GroomsComponent],
  imports: [
    CommonModule,
    GroomsRoutingModule
  ]
})
export class GroomsModule { }
