import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { LifestyleComponent } from './LifestyleDetails.component';
//import { MatFormFieldModule, MatInputModule, MatSelectModule, MatAutocompleteModule, MatCheckboxModule, MatRadioModule, MatButtonModule, MatOptionModule } from '@angular/material';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
 
 
 

 
 


const liferoute: Routes = [     
    { path:'', component: LifestyleComponent }
]
  



@NgModule({

    declarations: [LifestyleComponent],
    imports: [CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        MatFormFieldModule,
        RouterModule.forChild(liferoute)],
    providers: [],
    exports: [LifestyleComponent]

})

export class LifestyleLazyClass{

}