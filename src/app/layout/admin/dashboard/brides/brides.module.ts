import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BridesRoutingModule } from './brides-routing.module';
import { BridesComponent } from './brides.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { ViewComponent } from '../view/view.component';
import { ViewModule } from '../view/view.module';
import {
  MatPaginator, MatSort, MatTable, MatTableModule, MatTabHeader,
  MatHeaderRow, MatHeaderCell, MatHeaderCellDef, MatHeaderRowDef,
  MatSortHeader, MatRow, MatRowDef,  MatCell, MatCellDef,
} from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';




@NgModule({
  declarations: [BridesComponent,
    MatTabHeader,
    MatHeaderRow,
 MatHeaderCell,
 MatHeaderCellDef,
 MatHeaderRowDef,
 MatSortHeader,
     MatRow,
 MatRowDef,
 MatCell,
 MatCellDef],
  entryComponents: [ViewComponent],
  imports: [
    CommonModule,
    BridesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    ViewModule  ,
    MatPaginator, 
    MatSort, 
    
        MatTable, 
        MatTableModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  
  exports:[ViewModule],


})
export class BridesModule { }
