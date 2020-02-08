import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  
    MatButtonModule,  
    MatMenuModule,  
    MatToolbarModule,  
    MatIconModule,  
    MatCardModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatDatepickerModule,  
    MatDatepicker,  
    MatNativeDateModule,  
    MatRadioModule,  
    MatSelectModule,  
    MatOptionModule,  
    MatSlideToggleModule,ErrorStateMatcher,ShowOnDirtyErrorStateMatcher  
  } from '@angular/material';
 
import { CareerComponent } from './career.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { BrowserModule } from '@angular/platform-browser';


const careerroute: Routes = [     
    { path: '', component: CareerComponent }
]
  



@NgModule({

    declarations: [CareerComponent],
    imports: [CommonModule,        
    FormsModule,  
    ReactiveFormsModule,  
    MatButtonModule,  
    MatMenuModule,  
    MatToolbarModule,  
    MatIconModule,  
    MatCardModule,  
    //BrowserAnimationsModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatRadioModule,  
    MatSelectModule,  
    MatOptionModule,  
    MatSlideToggleModule,
        ReactiveFormsModule, RouterModule.forChild(careerroute)],
    providers: [],
    exports: [CareerComponent]

})

export class CareerLazyClass{

}