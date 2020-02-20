import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroomsRoutingModule } from './grooms-routing.module';
import { GroomsComponent, DialogOverviewExampleDialog } from './grooms.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataService } from 'src/app/Services/data.service';

import {Ng2SearchPipeModule} from 'ng2-search-filter'
import { MaterialModule } from 'src/app/material/material.module';
 
@NgModule({
  declarations: [GroomsComponent,DialogOverviewExampleDialog],
  entryComponents: [DialogOverviewExampleDialog],
 
  imports: [
    CommonModule,
    GroomsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    MaterialModule

  ],
  
  
  providers : [DataService]
})
export class GroomsModule { }
