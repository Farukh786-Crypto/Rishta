import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltersComponent } from './filters.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MatDialogRef } from '@angular/material';
//import {MatDialogModule} from '@angular/material/dialog'; 



const filtersroute: Routes = [     
    { path: '', component: FiltersComponent }
]
  



@NgModule({

    declarations: [FiltersComponent],
    imports: [CommonModule,
        ReactiveFormsModule,
        MaterialModule, 
        
        RouterModule.forChild(filtersroute)],
    providers: [],
    exports: [FiltersComponent]

})

export class FiltersLazyClass{

}