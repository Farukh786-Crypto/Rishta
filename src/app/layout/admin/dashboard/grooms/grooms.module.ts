import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroomsRoutingModule } from './grooms-routing.module';
import { GroomsComponent } from './grooms.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataService } from 'src/app/Services/data.service';

import {Ng2SearchPipeModule} from 'ng2-search-filter'
 
@NgModule({
  declarations: [GroomsComponent],
  imports: [
    CommonModule,
    GroomsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule

  ],
  providers : [DataService]
})
export class GroomsModule { }
