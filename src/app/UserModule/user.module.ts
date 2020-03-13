import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { HeaderFooterComponent } from './MasterPage/header-footer.component';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule } from "@angular/material";
//import { FlexLayoutModule } from "@angular/flex-layout";
import { UsersAuthGuard } from '../Guard/users-auth.guard'
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { ContactComponent } from './contact/contact.component';
import { PackagesComponent } from '../layout/admin/packages/packages.component';
import { MatchesComponent } from './matches/matches.component';
import { AboutComponent } from './about/about.component';
 
//import { FlexLayoutModule } from '@angular/flex-layout';
const route: Routes = [
    {
        path: '', component: UserComponent, children: [


            { path: '', redirectTo: 'profiledetails', pathMatch: 'full' },
            { path: 'profiledetails', loadChildren: './ProfileDetailsForm/ProfileDetailsLazy.module#ProfileDetailsLazyClass', canActivate: [UsersAuthGuard] },
            { path: 'astroandreligion', loadChildren: './AstroandreligionForm/AstroreligionLazy.module#AstroreligionLazyClass', canActivate: [UsersAuthGuard] },
            { path: 'CareerDetails', loadChildren: './CareerDetailsForm/careerLazy.module#CareerLazyClass', canActivate: [UsersAuthGuard] },
            { path: 'familydetails', loadChildren: './FamilyDetailsForm/Family-detailsLazy.modules#FamilyLazyClass', canActivate: [UsersAuthGuard] },
            { path: 'Educationdetails', loadChildren: './EducationDetailsForm/EducationDetailsLazy.module#EducationLazyClass', canActivate: [UsersAuthGuard] },
            { path: 'LifestyleDetails', loadChildren: './LifestyleDetailsForm/LifestyleDetailsLazy.module#LifestyleLazyClass', canActivate: [UsersAuthGuard] },
            { path: 'personalDetails', loadChildren: './PersonalDetailsForm/personaldetailsLazy.module#PersonaldetailsLazyClass', canActivate: [UsersAuthGuard] },
            { path: 'feedbackDetails', loadChildren: './Feedback/feedbackLazy.module#FeedbackLazyClass', canActivate: [UsersAuthGuard] },
            { path: 'filters', loadChildren: './filters/filterslazy.module#FiltersLazyClass', canActivate: [UsersAuthGuard] },
        
            { path: 'profiledetails', loadChildren: './ProfileDetailsForm/ProfileDetailsLazy.module#ProfileDetailsLazyClass',canActivate:[UsersAuthGuard] },
            { path: 'astroandreligion', loadChildren: './AstroandreligionForm/AstroreligionLazy.module#AstroreligionLazyClass',canActivate:[UsersAuthGuard] },
            { path: 'CareerDetails', loadChildren: './CareerDetailsForm/careerLazy.module#CareerLazyClass',canActivate:[UsersAuthGuard] },
            { path: 'familydetails', loadChildren: './FamilyDetailsForm/Family-detailsLazy.modules#FamilyLazyClass',canActivate:[UsersAuthGuard] },
            { path: 'Educationdetails', loadChildren: './EducationDetailsForm/EducationDetailsLazy.module#EducationLazyClass' ,canActivate:[UsersAuthGuard]},
            { path: 'LifestyleDetails', loadChildren: './LifestyleDetailsForm/LifestyleDetailsLazy.module#LifestyleLazyClass',canActivate:[UsersAuthGuard] },
            { path: 'personalDetails', loadChildren: './PersonalDetailsForm/personaldetailsLazy.module#PersonaldetailsLazyClass',canActivate:[UsersAuthGuard]},
            { path: 'feedbackDetails', loadChildren: './Feedback/feedbackLazy.module#FeedbackLazyClass',canActivate:[UsersAuthGuard] },
              { path: 'contact' , component:ContactComponent},
              { path: 'matches' , component:MatchesComponent},
              { path: 'packages' , component:PackagesComponent},
              { path: 'about' , component:AboutComponent}


        ]
    },
]
@NgModule({
    declarations: [UserComponent, HeaderFooterComponent,ContactComponent,MatchesComponent,AboutComponent,PackagesComponent],
    imports: [CommonModule, 
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MaterialModule,
        // FlexLayoutModule,
        HttpClientModule,
        RouterModule.forChild(route),
        LayoutModule  
    ],
    providers: [],
})
export class UserModule {
}