import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { PersonalDetailsComponent } from './personaldetails.component';


const personaldetailsroute: Routes = [

    // { path:'' , redirectTo:'register' , pathMatch:'full' } ,
    { path: '', component: PersonalDetailsComponent}

]


@NgModule({

    declarations: [PersonalDetailsComponent],
    imports: [CommonModule,
        ShowHidePasswordModule,
        ReactiveFormsModule, RouterModule.forChild(personaldetailsroute)],
    providers: [],
    exports: [PersonalDetailsComponent]

})

export class PersonaldetailsLazyClass{

}