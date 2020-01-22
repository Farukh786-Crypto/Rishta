import { Routes } from '@angular/router'
import { ContactComponent } from './RegisterForm/contact.component'
import { RegisterFormComponent } from './RegisterForm/Register.component'
//import {}  from '../RegisterForm/RegisterLazy.module#RegisterLazyClass'

export const MyRoute: Routes = [

    { path: '', component: ContactComponent },
    { path: 'register', loadChildren: './RegisterForm/RegisterLazy.module#RegisterLazyClass' }


]
