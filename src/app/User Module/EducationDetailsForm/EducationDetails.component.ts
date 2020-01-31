import{Component} from '@angular/core'
import{FormControl, Validators,FormGroup}from'@angular/forms'
import { ToastrService } from 'ngx-toastr';
 
@Component({
selector:'education-comp',
templateUrl:'./EducationDetails.component.html'
})

export class EducationComponent{
title:string='Education Demo Component '
careerDetails:FormGroup
str:string
disabled:boolean
isSubmitted:boolean;
constructor(){

    // this.careerDetails=new FormGroup({
    //     Country:new FormControl('',Validators.required),
    //     State:new FormControl('',[Validators.required]),
    //     City:new FormControl('',[Validators.required]),
    //     Pincode:new FormControl('',[Validators.required]),
    //     HighestDegree:new FormControl('',[Validators.required]),
    //     Emplyeed:new FormControl('',[Validators.required]),
    //     Occupation:new FormControl('',[Validators.required]),
    //     Income:new FormControl('',[Validators.required]),
    //     Express:new FormControl('',[Validators.required])
    // }) 
    
    }
     
     
    

onSubmit(data:any)
{
    this.isSubmitted=true;
    if(this.careerDetails.valid)
   {  alert(JSON.stringify(data));
      
    }
    else
    {
        // alert(JSON.stringify(this.careerDetails.value));
        return false; 
    }

}


}