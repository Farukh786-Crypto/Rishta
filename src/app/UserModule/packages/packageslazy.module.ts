import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms' 
import { MaterialModule } from 'src/app/material/material.module'; 
import { PackagesComponent } from './packages.component';

@NgModule({

    declarations: [PackagesComponent],
    imports: [CommonModule,
        ReactiveFormsModule,  
        MaterialModule],
    providers: [],
    exports: [PackagesComponent]

})

export class PackagesLazyClass{

}