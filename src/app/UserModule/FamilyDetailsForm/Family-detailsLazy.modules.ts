import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { FamilyDetailsComponent } from './Family-details.component'
import { MaterialModule } from 'src/app/material/material.module';

const familyroute: Routes = [

    // { path:'' , redirectTo:'register' , pathMatch:'full' } ,
    { path: '', component: FamilyDetailsComponent}

]


@NgModule({

    declarations: [FamilyDetailsComponent],
    imports: [CommonModule,MaterialModule,
        ShowHidePasswordModule,
        ReactiveFormsModule, RouterModule.forChild(familyroute)],
    providers: [],
    exports: [FamilyDetailsComponent]

})

export class FamilyLazyClass{

}