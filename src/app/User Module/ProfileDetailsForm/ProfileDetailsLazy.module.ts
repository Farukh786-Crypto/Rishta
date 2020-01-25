import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { ProfileDetailsComponent } from './profile-details.component';

const profileroute: Routes = [

    // { path:'' , redirectTo:'register' , pathMatch:'full' } ,
    { path: '', component: ProfileDetailsComponent}

]


@NgModule({

    declarations: [ProfileDetailsComponent],
    imports: [CommonModule,
        ShowHidePasswordModule,
        ReactiveFormsModule, RouterModule.forChild(profileroute)],
    providers: [],
    exports: [ProfileDetailsComponent]

})

export class RegisterLazyClass{

}