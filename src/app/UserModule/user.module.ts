import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { HeaderFooterComponent } from './MasterPage/header-footer.component';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule } from "@angular/material";
//import { FlexLayoutModule } from "@angular/flex-layout";
import {UsersAuthGuard} from '../Guard/users-auth.guard'
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
//import { FlexLayoutModule } from '@angular/flex-layout';
const route: Routes = [
    {
        path: '', component: UserComponent, children: [


            { path: '', redirectTo: 'profiledetails', pathMatch: 'full' },
            { path: 'profiledetails', loadChildren: './ProfileDetailsForm/ProfileDetailsLazy.module#ProfileDetailsLazyClass',canActivate:[UsersAuthGuard] },
            { path: 'astroandreligion', loadChildren: './AstroandreligionForm/AstroreligionLazy.module#AstroreligionLazyClass',canActivate:[UsersAuthGuard] },
            { path: 'CareerDetails', loadChildren: './CareerDetailsForm/careerLazy.module#CareerLazyClass',canActivate:[UsersAuthGuard] },
            { path: 'familydetails', loadChildren: './FamilyDetailsForm/Family-detailsLazy.modules#FamilyLazyClass',canActivate:[UsersAuthGuard] },
            { path: 'Educationdetails', loadChildren: './EducationDetailsForm/EducationDetailsLazy.module#EducationLazyClass' ,canActivate:[UsersAuthGuard]},
            { path: 'LifestyleDetails', loadChildren: './LifestyleDetailsForm/LifestyleDetailsLazy.module#LifestyleLazyClass',canActivate:[UsersAuthGuard] },
            { path: 'personalDetails', loadChildren: './PersonalDetailsForm/personaldetailsLazy.module#PersonaldetailsLazyClass',canActivate:[UsersAuthGuard]},
            { path: 'feedbackDetails', loadChildren: './Feedback/feedbackLazy.module#FeedbackLazyClass',canActivate:[UsersAuthGuard] },
            { path: 'filters', loadChildren: './filters/filterslazy.module#FiltersLazyClass',canActivate:[UsersAuthGuard] },
        
        ]
    },
]
@NgModule({
    declarations: [UserComponent, HeaderFooterComponent],
    imports: [CommonModule, 
        MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MaterialModule,
   // FlexLayoutModule,
   HttpClientModule,
    RouterModule.forChild(route)
    ],
    providers: [],
    exports: []
})
export class UserModule{
}