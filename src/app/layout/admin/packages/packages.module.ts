import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { PackagesComponent } from './packages.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [PackagesComponent],
  imports: [
    CommonModule,
    PackagesRoutingModule,
    MaterialModule
  ],
  exports: [PackagesComponent]
})
export class PackagesModule { }
