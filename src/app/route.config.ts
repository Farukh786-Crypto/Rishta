import { Routes } from '@angular/router'
import { RegisterFormComponent } from './User Module/RegisterForm/Register.component'
import { AstroreligionComponent } from './User Module/AstroandreligionForm/Astroreligion.component'
import { ProfileDetailsComponent } from './User Module/ProfileDetailsForm/profile-details.component'
import { PersonalDetailsComponent } from './User Module/PersonalDetailsForm/personaldetails.component'
//import {}  from './User Module/RegisterForm/RegisterLazy.module#RegisterLazyClass'
//import {} from './User Module/AstroandreligionForm/AstroreligionLazy.module#AstroreligionLazyClass'
//import {} from './User Module/ProfileDetailsForm/ProfileDetailsLazy.module#RegisterLazyClass'
//import {} from './User Module/PersonalDetailsForm/personaldetailsLazy.module#PersonaldetailsLazyClass'
export const MyRoute: Routes = [

    
    { path: '', loadChildren: './User Module/RegisterForm/RegisterLazy.module#RegisterLazyClass' },
    { path:'astroandreligion' , loadChildren:'./User Module/AstroandreligionForm/AstroreligionLazy.module#AstroreligionLazyClass'},
    { path:'profiledetails' , loadChildren:'./User Module/ProfileDetailsForm/ProfileDetailsLazy.module#RegisterLazyClass'},
    { path:'personalDetails' , loadChildren:'./User Module/PersonalDetailsForm/personaldetailsLazy.module#PersonaldetailsLazyClass'}
]