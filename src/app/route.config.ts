import { Routes } from '@angular/router'
import { ContactComponent } from './RegisterForm/contact.component'
import { RegisterFormComponent } from './RegisterForm/Register.component'
import { ChangePasswordComponent } from './layout/admin/changepassword/change-password.component'
//import {}  from '../RegisterForm/RegisterLazy.module#RegisterLazyClass'
 //import { } from './layout/admin/changepassword/changepasswordlazy.module'
export const MyRoute: Routes = [

    { path: '', component: ContactComponent },
    { path: 'register', loadChildren: './RegisterForm/RegisterLazy.module#RegisterLazyClass' },
    {path:'changepassword', loadChildren:'./layout/admin/changepassword/changepasswordlazy.module#ChangePasswordLazyClass'}


]
