import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { CareerComponent } from './career.component';


const careerroute: Routes = [     
    { path: '', component: CareerComponent }
]
  



@NgModule({

    declarations: [CareerComponent],
    imports: [CommonModule,
        ReactiveFormsModule, RouterModule.forChild(careerroute)],
    providers: [],
    exports: [CareerComponent]

})

export class CareerLazyClass{

}