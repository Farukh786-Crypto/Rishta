import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from 'src/app/material/material.module';
import { ContactComponent } from './contact.component';
 
@NgModule({

    declarations: [ContactComponent],
    imports: [CommonModule,
        ReactiveFormsModule, 
        MaterialModule],
    providers: [],
    exports: [ContactComponent]
})
export class ContactLazyClass{
}