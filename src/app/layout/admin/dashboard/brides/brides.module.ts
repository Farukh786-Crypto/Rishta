import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BridesRoutingModule } from './brides-routing.module';
import { BridesComponent } from './brides.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { ViewComponent } from '../view/view.component';
import { ViewModule } from '../view/view.module';
import { MaterialModule } from '../../../../material/material.module'

@NgModule({
  declarations: [BridesComponent],
  entryComponents: [ViewComponent],
  imports: [
    CommonModule,
    BridesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    ViewModule,
    MaterialModule,
  ],  
  exports:[ViewModule],


})
export class BridesModule { }
