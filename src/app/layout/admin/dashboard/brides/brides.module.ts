import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BridesRoutingModule } from './brides-routing.module';
import { BridesComponent } from './brides.component';


@NgModule({
  declarations: [BridesComponent],
  imports: [
    CommonModule,
    BridesRoutingModule
  ]
})
export class BridesModule { }
