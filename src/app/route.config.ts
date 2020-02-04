import { Routes } from '@angular/router'
import { ErrorComponent } from './User Module/Error.component'

export const MyRoute: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'admin', loadChildren: './layout/layout.module#LayoutModule' },
    { path: 'users', loadChildren: './User Module/user.module#UserModule' },
    { path: '**', component: ErrorComponent }
]

