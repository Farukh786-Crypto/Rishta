import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesRoutingModule } from './matches-routing.module';
import { MatchesComponent } from './matches.component';
import { MaterialModule } from '../../../material/material.module';



@NgModule({
  declarations: [MatchesComponent],
  imports: [
    CommonModule,
    MatchesRoutingModule,
    MaterialModule
  ],
  exports:[MatchesComponent]
})
export class MatchesModule { 
  
}