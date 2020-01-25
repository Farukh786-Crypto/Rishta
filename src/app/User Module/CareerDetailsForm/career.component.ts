import{Component} from '@angular/core'
import{FormControl, Validators,FormGroup}from'@angular/forms'
import { ToastrService } from 'ngx-toastr';
 
@Component({
selector:'career-comp',
templateUrl:'./career.component.html'
})

export class CareerComponent{
title:string='career Demo Component '
careerDetails:FormGroup
str:string
disabled:boolean
isSubmitted:boolean;
constructor(){

    this.careerDetails=new FormGroup({
        Country:new FormControl('',Validators.required),
        State:new FormControl('',[Validators.required]),
        City:new FormControl('',[Validators.required]),
        Pincode:new FormControl('',[Validators.required]),
        HighestDegree:new FormControl('',[Validators.required]),
        Emplyeed:new FormControl('',[Validators.required]),
        Occupation:new FormControl('',[Validators.required]),
        Income:new FormControl('',[Validators.required]),
        Express:new FormControl('',[Validators.required])
    }) 
    
    }
     

onSubmit(data:any)
{
    this.isSubmitted=true;
    if(this.careerDetails.valid)
   { 
        // alert(JSON.stringify(this.careerDetails.value));
        alert(JSON.stringify(data));
      
    }
    else
    {
        return false;
    }

}


}