import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AstroreligionComponent } from './Astroreligion.component';


const astroroute: Routes = [

    // { path:'' , redirectTo:'register' , pathMatch:'full' } ,
    { path: '', component: AstroreligionComponent }

]


@NgModule({

    declarations: [AstroreligionComponent],
    imports: [CommonModule,
        ReactiveFormsModule, RouterModule.forChild(astroroute)],
    providers: [],
    exports: [AstroreligionComponent]

})

export class AstroreligionLazyClass{

}