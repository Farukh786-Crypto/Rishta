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
import { EditComponent } from '../edit/edit.component';
import { PhotoviewComponent } from '../photoview/photoview.component';
import { EditModule } from '../edit/edit.module';
import { PhotoviewModule } from '../photoview/photoview.module';

@NgModule({
  declarations: [BridesComponent],
  entryComponents: [ViewComponent,EditComponent,PhotoviewComponent],
  imports: [
    CommonModule,
    BridesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    ViewModule,
    EditModule,
    PhotoviewModule,
    MaterialModule,
  ],  
  exports:[ViewModule],


})
export class BridesModule { }
