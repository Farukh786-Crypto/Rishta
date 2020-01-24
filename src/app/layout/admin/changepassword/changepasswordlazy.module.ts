import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ChangePasswordComponent } from './change-password.component'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

const route2:Routes =[

    { path:'', component:ChangePasswordComponent}
]

@NgModule({
    declarations:[ChangePasswordComponent],
    imports:[CommonModule,ReactiveFormsModule,
    RouterModule.forChild(route2)],
    providers:[],
    exports:[]
})

export class ChangePasswordLazyClass{

}