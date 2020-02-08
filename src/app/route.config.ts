import { Routes } from '@angular/router'
import { ErrorComponent } from './User Module/Error.component'
import {AuthGuard} from './Guard/auth.guard';
import { AdminAuthGuard } from './Guard/admin-auth.guard';
import { UsersAuthGuard } from './Guard/users-auth.guard';
export const MyRoute: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: './login/login.module#LoginModule'},
    { path: 'admin', loadChildren: './layout/layout.module#LayoutModule',canActivate:[AdminAuthGuard]},
    { path: 'users', loadChildren: './User Module/user.module#UserModule',canActivate:[UsersAuthGuard]},
    // { path: 'sign-up', loadChildren: './signup/signup.module#SignupModule' },
    { path: '**', component: ErrorComponent }
]
