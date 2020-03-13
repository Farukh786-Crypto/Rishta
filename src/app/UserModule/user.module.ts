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
<<<<<<< HEAD
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
=======
import { ContactComponent } from './contact/contact.component';
import { PackagesComponent } from '../layout/admin/packages/packages.component';
import { MatchesComponent } from './matches/matches.component';
import { AboutComponent } from './about/about.component';
 
>>>>>>> 5594ae3ce9033269a27114bbb128138b90b92aca
//import { FlexLayoutModule } from '@angular/flex-layout';
const route: Routes = [
    {
        path: '', component: UserComponent, children: [


            { path: '', redirectTo: 'profiledetails', pathMatch: 'full' },
<<<<<<< HEAD
            { path: 'profiledetails', loadChildren: './ProfileDetailsForm/ProfileDetailsLazy.module#ProfileDetailsLazyClass', canActivate: [UsersAuthGuard] },
            { path: 'astroandreligion', loadChildren: './AstroandreligionForm/AstroreligionLazy.module#AstroreligionLazyClass', canActivate: [UsersAuthGuard] },
            { path: 'CareerDetails', loadChildren: './CareerDetailsForm/careerLazy.module#CareerLazyClass', canActivate: [UsersAuthGuard] },
            { path: 'familydetails', loadChildren: './FamilyDetailsForm/Family-detailsLazy.modules#FamilyLazyClass', canActivate: [UsersAuthGuard] },
            { path: 'Educationdetails', loadChildren: './EducationDetailsForm/EducationDetailsLazy.module#EducationLazyClass', canActivate: [UsersAuthGuard] },
            { path: 'LifestyleDetails', loadChildren: './LifestyleDetailsForm/LifestyleDetailsLazy.module#LifestyleLazyClass', canActivate: [UsersAuthGuard] },
            { path: 'personalDetails', loadChildren: './PersonalDetailsForm/personaldetailsLazy.module#PersonaldetailsLazyClass', canActivate: [UsersAuthGuard] },
            { path: 'feedbackDetails', loadChildren: './Feedback/feedbackLazy.module#FeedbackLazyClass', canActivate: [UsersAuthGuard] },
            { path: 'filters', loadChildren: './filters/filterslazy.module#FiltersLazyClass', canActivate: [UsersAuthGuard] },
        
=======
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


>>>>>>> 5594ae3ce9033269a27114bbb128138b90b92aca
        ]
    },
]
@NgModule({
<<<<<<< HEAD
    declarations: [UserComponent, HeaderFooterComponent,MainNavComponent],
    imports: [CommonModule,
=======
    declarations: [UserComponent, HeaderFooterComponent,ContactComponent,MatchesComponent,AboutComponent,PackagesComponent],
    imports: [CommonModule, 
>>>>>>> 5594ae3ce9033269a27114bbb128138b90b92aca
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
    exports: [MainNavComponent]
})
export class UserModule {
}