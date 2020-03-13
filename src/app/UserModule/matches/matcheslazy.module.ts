import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
 
import { MaterialModule } from 'src/app/material/material.module';
 
import { MatchesComponent } from './matches.component';
@NgModule({

    declarations: [MatchesComponent],
    imports: [CommonModule,
        ReactiveFormsModule, 
        MaterialModule],
    providers: [],
    exports: [MatchesComponent]

})

export class MatchesLazyClass{

}