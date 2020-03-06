import { Routes } from '@angular/router'
import { ErrorComponent } from './UserModule/Error.component'
import { AuthGuard } from './Guard/auth.guard';
import { AdminAuthGuard } from './Guard/admin-auth.guard';
import { UsersAuthGuard } from './Guard/users-auth.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
export const MyRoute: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'sign-up',loadChildren:'./sign-up/sign-up.module#SignUpModule'},
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'admin', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AdminAuthGuard] },
  { path: 'users', loadChildren: './UserModule/user.module#UserModule', canActivate: [UsersAuthGuard] },
  { path: '**', component: ErrorComponent }
   ]