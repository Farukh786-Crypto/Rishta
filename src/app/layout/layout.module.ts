import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { DefaultCompComponent } from './admin/dashboard/default-comp/default-comp.component';


@NgModule({
  declarations: [LayoutComponent, DefaultCompComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
