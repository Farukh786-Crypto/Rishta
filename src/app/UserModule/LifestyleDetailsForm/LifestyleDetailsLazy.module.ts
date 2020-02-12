import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { LifestyleComponent } from './LifestyleDetails.component';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatAutocompleteModule, MatCheckboxModule, MatRadioModule, MatButtonModule, MatOptionModule } from '@angular/material';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
 
 

 
 


const liferoute: Routes = [     
    { path:'', component: LifestyleComponent }
]
  



@NgModule({

    declarations: [LifestyleComponent],
    imports: [CommonModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatOptionModule,
        MatSelectModule,
        MatCardModule,
        MatChipsModule,
        MatButtonModule,
        MatToolbarModule,
        MatListModule, 
        MatGridListModule,
        MatRadioModule,
        MatInputModule,
        MatFormFieldModule,
        RouterModule.forChild(liferoute)],
    providers: [],
    exports: [LifestyleComponent,MatCardModule]

})

export class LifestyleLazyClass{

}