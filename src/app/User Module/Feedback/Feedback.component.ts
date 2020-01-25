import{Component} from '@angular/core'
import{FormControl, Validators,FormGroup}from'@angular/forms'
import { ToastrService } from 'ngx-toastr';
 
@Component({
selector:'Feedback-comp',
templateUrl:'./Feedback.component.html'
})

export class FeedbackComponent{
title:string='Feedback Demo Component '
feedbackDetails:FormGroup
str:string
disabled:boolean
isSubmitted:boolean;
constructor(private toastr: ToastrService){

    this.feedbackDetails=new FormGroup({
        email:new FormControl('',Validators.required),
        name:new FormControl('',[Validators.required]),
        category:new FormControl('',[Validators.required]),
        reason:new FormControl('',[Validators.required]),
       
    }) 
    
    }

onSubmit(data:any)
{
    this.isSubmitted=true;
    if(this.feedbackDetails.valid)
   { 
       // alert(JSON.stringify(this.Feedback.value));
       this.toastr.success('Sucess!', 'Feedback form Succesfully sent !!');
       alert(JSON.stringify(data));
      
    }
    else
    {
        return false;
    }

}


}