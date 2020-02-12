import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { EducationComponent } from './EducationDetails.component';


const educationroute: Routes = [     
    { path: '', component: EducationComponent }
]
  



@NgModule({

    declarations: [EducationComponent],
    imports: [CommonModule,
        MaterialModule,
        ReactiveFormsModule, RouterModule.forChild(educationroute)],
    providers:[],
    exports: [EducationComponent]

})

export class EducationLazyClass{

}