import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MatchesComponent } from './admin/matches/matches.component';


@NgModule({
  declarations: [LayoutComponent, MatchesComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule
  ]
})
export class LayoutModule { }
