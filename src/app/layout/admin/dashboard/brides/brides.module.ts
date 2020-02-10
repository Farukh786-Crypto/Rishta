import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BridesRoutingModule } from './brides-routing.module';
import { BridesComponent } from './brides.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
@NgModule({
  declarations: [BridesComponent],
  imports: [
    CommonModule,
    BridesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
    
  ]
})
export class BridesModule { }
