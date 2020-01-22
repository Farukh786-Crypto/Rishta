import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './Register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ShowHidePasswordModule } from 'ngx-show-hide-password';

const route1: Routes = [

    // { path:'' , redirectTo:'register' , pathMatch:'full' } ,
    { path: '', component: RegisterFormComponent }

]


@NgModule({

    declarations: [RegisterFormComponent],
    imports: [CommonModule,
        ShowHidePasswordModule,
        ReactiveFormsModule, RouterModule.forChild(route1)],
    providers: [],
    // exports: [RegisterFormComponent]

})

export class RegisterLazyClass {



}









