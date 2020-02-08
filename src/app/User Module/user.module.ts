import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { HeaderFooterComponent } from './MasterPage/header-footer.component';
import {UsersAuthGuard} from '../Guard/users-auth.guard'
import { from } from 'rxjs';


const route: Routes = [
    {
        path: '', component: UserComponent, children: [

            { path: '', redirectTo: 'register', pathMatch: 'full' },
            { path: 'register', loadChildren: './RegisterForm/RegisterLazy.module#RegisterLazyClass',canActivate:[UsersAuthGuard] },
            { path: 'astroandreligion', loadChildren: './AstroandreligionForm/AstroreligionLazy.module#AstroreligionLazyClass',canActivate:[UsersAuthGuard] },
            { path: 'profiledetails', loadChildren: './ProfileDetailsForm/ProfileDetailsLazy.module#RegisterLazyClass',canActivate:[UsersAuthGuard] },
            { path: 'CareerDetails', loadChildren: './CareerDetailsForm/careerLazy.module#CareerLazyClass',canActivate:[UsersAuthGuard] },
            { path: 'familydetails', loadChildren: './FamilyDetailsForm/Family-detailsLazy.modules#FamilyLazyClass',canActivate:[UsersAuthGuard] },
            { path: 'Educationdetails', loadChildren: './EducationDetailsForm/EducationDetailsLazy.module#EducationLazyClass' ,canActivate:[UsersAuthGuard]},
            { path: 'LifestyleDetails', loadChildren: './LifestyleDetailsForm/LifestyleDetailsLazy.module#LifestyleLazyClass',canActivate:[UsersAuthGuard] },
            { path: 'personalDetails', loadChildren: './PersonalDetailsForm/personaldetailsLazy.module#PersonaldetailsLazyClass',canActivate:[UsersAuthGuard] },
            { path: 'feedbackDetails', loadChildren: './Feedback/feedbackLazy.module#FeedbackLazyClass',canActivate:[UsersAuthGuard] },
        ]
    },
]
@NgModule({

    declarations: [UserComponent, HeaderFooterComponent],
    imports: [CommonModule,
        RouterModule.forChild(route)
    ],
    providers: [],
    exports: []

})

export class UserModule{

}