import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { LifestyleComponent } from './LifestyleDetails.component';


const liferoute: Routes = [     
    { path:'', component: LifestyleComponent }
]
  



@NgModule({

    declarations: [LifestyleComponent],
    imports: [CommonModule,
        ReactiveFormsModule, RouterModule.forChild(liferoute)],
    providers: [],
    exports: [LifestyleComponent]

})

export class LifestyleLazyClass{

}