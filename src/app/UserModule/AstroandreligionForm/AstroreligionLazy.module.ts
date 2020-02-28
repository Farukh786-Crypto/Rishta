import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AstroreligionComponent } from './Astroreligion.component';
import { MaterialModule } from 'src/app/material/material.module';
import { GridColsDirective } from './grid-cols.directive';



const astroroute: Routes = [

    // { path:'' , redirectTo:'register' , pathMatch:'full' } ,
    { path: '', component: AstroreligionComponent }

]


@NgModule({

    declarations: [AstroreligionComponent, GridColsDirective],
    imports: [CommonModule,
        ReactiveFormsModule, RouterModule.forChild(astroroute),
        MaterialModule],
    providers: [],
    exports: [AstroreligionComponent]

})

export class AstroreligionLazyClass{

}