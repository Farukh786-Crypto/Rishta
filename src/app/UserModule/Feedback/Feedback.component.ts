import { Component, Inject } from '@angular/core'
import { FormControl, Validators, FormGroup } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { FeedbackService } from './feedback.service';
import { feedbackprofile } from 'src/app/model';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';


@Component({
    selector: 'Feedback-comp',
    templateUrl: './Feedback.component.html',
    styleUrls: ['Feedback.component.css',
                '../user.component.css'],
    providers: [FeedbackService]
})

export class FeedbackComponent {
    title: string = 'Feedback Demo Component '
    feedbackDetails: FormGroup
    str: string
    disabled: boolean
    isSubmitted: boolean;
    constructor(private toastr: ToastrService,private feedback: FeedbackService) {

        this.feedbackDetails = new FormGroup({
            name: new FormControl('', [Validators.required]),
            address: new FormControl('', [Validators.required]),
            email: new FormControl('', Validators.required),
            category: new FormControl('', [Validators.required]),
            suggestion: new FormControl('', [Validators.required]),
        })

    }
      

    public feedbackPost:any;
    
    public FeedbackUser(feedcontent:feedbackprofile){
        this.feedback.addContent(feedcontent).subscribe(res=>{

                     this.feedbackPost=res,
                    this.toastr.success('Sucess!!')
                    
                    
                    },
                     err=>{this.feedbackPost=err})
                     
                    
           }



    onSubmit(data: any) {
        this.isSubmitted = true;
        if (this.feedbackDetails.valid) {
            // alert(JSON.stringify(this.Feedback.value));
            this.toastr.success('Sucess!', 'Feedback form Succesfully sent !!');
            alert(JSON.stringify(data));

        }
        else {
            return false;
        }

    }


}