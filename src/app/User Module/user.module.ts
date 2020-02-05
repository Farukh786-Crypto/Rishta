import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { HeaderFooterComponent } from './MasterPage/header-footer.component';


const route: Routes = [
    {
        path: '', component: UserComponent, children: [

            { path: '', redirectTo: 'register', pathMatch: 'full' },
            { path: 'register', loadChildren: './RegisterForm/RegisterLazy.module#RegisterLazyClass' },
            { path: 'astroandreligion', loadChildren: './AstroandreligionForm/AstroreligionLazy.module#AstroreligionLazyClass' },
            { path: 'profiledetails', loadChildren: './ProfileDetailsForm/ProfileDetailsLazy.module#RegisterLazyClass' },
            { path: 'CareerDetails', loadChildren: './CareerDetailsForm/careerLazy.module#CareerLazyClass' },
            { path: 'familydetails', loadChildren: './FamilyDetailsForm/Family-detailsLazy.modules#FamilyLazyClass' },
            { path: 'Educationdetails', loadChildren: './EducationDetailsForm/EducationDetailsLazy.module#EducationLazyClass' },
            { path: 'LifestyleDetails', loadChildren: './LifestyleDetailsForm/LifestyleDetailsLazy.module#LifestyleLazyClass' },
            { path: 'personalDetails', loadChildren: './PersonalDetailsForm/personaldetailsLazy.module#PersonaldetailsLazyClass' },
            { path: 'feedbackDetails', loadChildren: './Feedback/feedbackLazy.module#FeedbackLazyClass' },
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