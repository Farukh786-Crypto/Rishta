import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material/material.module';
import {MatSelectModule} from '@angular/material/select';
 
import { CareerComponent } from './career.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { BrowserModule } from '@angular/platform-browser';
const careerroute: Routes = [     
    { path: '', component: CareerComponent }
]
@NgModule({

    declarations: [CareerComponent],
    imports: [
    CommonModule,        
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,
    MaterialModule,
    MatSelectModule,
    ReactiveFormsModule, RouterModule.forChild(careerroute)],
    providers: [],
    exports: [CareerComponent]
})

export class CareerLazyClass{

}