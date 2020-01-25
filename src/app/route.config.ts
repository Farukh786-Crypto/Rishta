


import { Routes } from '@angular/router'

import { RegisterFormComponent } from './User Module/RegisterForm/Register.component'
import { AstroreligionComponent } from './User Module/AstroandreligionForm/Astroreligion.component'
import { ProfileDetailsComponent } from './User Module/ProfileDetailsForm/profile-details.component'
import { PersonalDetailsComponent } from './User Module/PersonalDetailsForm/personaldetails.component'
import { LifestyleComponent } from './User Module/LifestyleDetailsForm/LifestyleDetails.component'
//import {}  from './User Module/RegisterForm/RegisterLazy.module#RegisterLazyClass'
//import {} from './User Module/AstroandreligionForm/AstroreligionLazy.module#AstroreligionLazyClass'
//import {} from './User Module/Feedback/feedbackLazy.module#FeedbackLazyClass'

export const MyRoute: Routes = [

   { path: '', loadChildren: './User Module/RegisterForm/RegisterLazy.module#RegisterLazyClass' },
    { path:'astroandreligion' , loadChildren:'./User Module/AstroandreligionForm/AstroreligionLazy.module#AstroreligionLazyClass'},
    { path:'profiledetails' , loadChildren:'./User Module/ProfileDetailsForm/ProfileDetailsLazy.module#RegisterLazyClass'},
    { path:'CareerDetails' , loadChildren:'./User Module/CareerDetailsForm/careerLazy.module#CareerLazyClass'},
    { path:'familydetails' , loadChildren:'./User Module/FamilyDetailsForm/Family-detailsLazy.modules#FamilyLazyClass'},
    { path:'LifestyleDetails' , loadChildren:'./User Module/LifestyleDetailsForm/LifestyleDetailsLazy.module#LifestyleLazyClass'},
    { path:'personalDetails' , loadChildren:'./User Module/PersonalDetailsForm/personaldetailsLazy.module#PersonaldetailsLazyClass'},
    { path:'feedbackDetails' , loadChildren:'./User Module/Feedback/feedbackLazy.module#FeedbackLazyClass'}
    
]

