import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [DashboardComponent,],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ],
  providers: []
})
export class DashboardModule { }
