import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedbackComponent } from './Feedback.component';
 



const feedbackroute: Routes = [     
    { path: '', component: FeedbackComponent }
]
  



@NgModule({

    declarations: [FeedbackComponent],
    imports: [CommonModule,
        ReactiveFormsModule, RouterModule.forChild(feedbackroute)],
    providers: [],
    exports: [FeedbackComponent]

})

export class FeedbackLazyClass{

}