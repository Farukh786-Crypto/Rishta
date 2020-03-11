import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedbackComponent } from './Feedback.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MatDialogRef } from '@angular/material';
//import {MatDialogModule} from '@angular/material/dialog'; 
//import {MatMenuModule} from '@angular/material/menu';


const feedbackroute: Routes = [     
    { path: '', component: FeedbackComponent }
]
  



@NgModule({

    declarations: [FeedbackComponent],
    imports: [CommonModule,
        ReactiveFormsModule,
        MaterialModule,  
        
        RouterModule.forChild(feedbackroute)],
    providers: [],
    exports: [FeedbackComponent]

})

export class FeedbackLazyClass{

}