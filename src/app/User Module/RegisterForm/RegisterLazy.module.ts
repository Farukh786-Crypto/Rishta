import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './Register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatCheckboxModule, MatRadioModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule, MatNativeDateModule, MatProgressBarModule, MatProgressSpinnerModule, MatRippleModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { MaterialModule } from 'src/app/material/material.module';

import { HttpClientModule } from '@angular/common/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


const route1: Routes = [

    // { path:'' , redirectTo:'register' , pathMatch:'full' } ,
    { path: '', component: RegisterFormComponent }

]

@NgModule({

    declarations: [RegisterFormComponent],
    imports: [CommonModule,
        FormsModule,        
        ShowHidePasswordModule, 
        MatListModule,       
        HttpClientModule,
        ReactiveFormsModule, RouterModule.forChild(route1),
        MaterialModule],
    providers: [],
    exports: [
        RegisterFormComponent
    ]

})

export class RegisterLazyClass {

}