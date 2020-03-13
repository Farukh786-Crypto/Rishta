import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
 
import { MaterialModule } from 'src/app/material/material.module';
import { AboutComponent } from './about.component'; 

@NgModule({

    declarations: [AboutComponent],
    imports: [CommonModule,
        ReactiveFormsModule,  
        MaterialModule],
    providers: [],
    exports: [AboutComponent]

})

export class AboutLazyClass{

}