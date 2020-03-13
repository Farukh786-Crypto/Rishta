import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { ProfileDetailsComponent } from './profile-details.component';
import { MaterialModule } from 'src/app/material/material.module';


const profileroute: Routes = [

<<<<<<< HEAD
   // { path:'' , redirectTo:'ProfileDetails' , pathMatch:'full' } ,
=======
    //{ path:'' , redirectTo:'ProfileDetails' , pathMatch:'full' } ,
>>>>>>> 5594ae3ce9033269a27114bbb128138b90b92aca
    { path: '', component: ProfileDetailsComponent}

]


@NgModule({

    declarations: [ProfileDetailsComponent],
    imports: [CommonModule,
        MaterialModule,
        ShowHidePasswordModule,
        ReactiveFormsModule, RouterModule.forChild(profileroute)],
    providers: [],
    exports: [ProfileDetailsComponent]

})

export class ProfileDetailsLazyClass{

}