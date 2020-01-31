import{Component} from '@angular/core'
import{FormControl, Validators,FormGroup}from'@angular/forms'
import { ToastrService } from 'ngx-toastr';
 
@Component({
selector:'education-comp',
templateUrl:'./EducationDetails.component.html'
})

export class EducationComponent{
title:string='Education Demo Component '
EduacationDetails:FormGroup
str:string
disabled:boolean
isSubmitted:boolean;
constructor(){

    this.EduacationDetails=new FormGroup({
        AEduacation:new FormControl('',Validators.required),
        HighestDegree:new FormControl('',[Validators.required]),
        GraduationDegree:new FormControl('',[Validators.required]),
        GraduationCollage:new FormControl('',[Validators.required]),
        SchoolName:new FormControl('',[Validators.required]),
         
    }) 
    
    }
     
     
    

onSubmit(data:any)
{
    this.isSubmitted=true;
    if(this.EduacationDetails.valid)
   {  alert(JSON.stringify(data));
      
    }
    else
    {
        // alert(JSON.stringify(this.careerDetails.value));
        return false; 
    }

}


}