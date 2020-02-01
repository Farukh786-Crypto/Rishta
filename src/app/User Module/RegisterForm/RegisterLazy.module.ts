import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './Register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatAutocompleteModule, MatCheckboxModule, MatRadioModule, MatButtonModule } from '@angular/material';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const route1: Routes = [

    // { path:'' , redirectTo:'register' , pathMatch:'full' } ,
    { path: '', component: RegisterFormComponent }

]

@NgModule({

    declarations: [RegisterFormComponent],
    imports: [CommonModule,
        FormsModule,
        ShowHidePasswordModule,
        MatFormFieldModule,
        MatInputModule,
        MaterialModule,
        MatSelectModule,
        MatRadioModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatButtonModule,
        ReactiveFormsModule, RouterModule.forChild(route1)],
    providers: [],
    exports: [RegisterFormComponent]

})

export class RegisterLazyClass {

}