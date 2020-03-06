import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroomsRoutingModule } from './grooms-routing.module';
import { GroomsComponent} from './grooms.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataService } from 'src/app/Services/data.service';
import {Ng2SearchPipeModule} from 'ng2-search-filter'
import { MaterialModule } from 'src/app/material/material.module';
import { ViewComponent } from '../view/view.component';
import { ViewModule } from '../view/view.module';
import { EditComponent } from '../edit/edit.component';
import { EditModule } from '../edit/edit.module';
 
@NgModule({
  declarations: [GroomsComponent],
  entryComponents: [ViewComponent,EditComponent],
 
  imports: [
    
    CommonModule,
    GroomsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    MaterialModule,
    ViewModule,
    EditModule
],
  providers : [DataService],
  exports : [ViewModule]
})
export class GroomsModule { }
