import { Routes } from '@angular/router'
import { RegisterFormComponent } from './User Module/RegisterForm/Register.component'
import { AstroreligionComponent } from './User Module/AstroandreligionForm/Astroreligion.component'
//import {}  from './User Module/RegisterForm/RegisterLazy.module#RegisterLazyClass'
//import {} from './User Module/AstroandreligionForm/AstroreligionLazy.module#AstroreligionLazyClass'
export const MyRoute: Routes = [

    
    { path: '', loadChildren: './User Module/RegisterForm/RegisterLazy.module#RegisterLazyClass' },
    { path:'astroandreligion' , loadChildren:'./User Module/AstroandreligionForm/AstroreligionLazy.module#AstroreligionLazyClass'}
]