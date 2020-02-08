import{Component} from '@angular/core'
import{FormControl, Validators,FormGroup}from'@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { CareerService } from './career.service';

@Component({
selector:'career-comp',
templateUrl:'./career.component.html',
styleUrls: ['./career.component.css'],
providers: [CareerService]
})

export class CareerComponent{
title:string='career Demo Component '
careerDetails:FormGroup
str:string
disabled:boolean
isSubmitted:boolean;
constructor(private toastr: ToastrService,private Career: CareerService){

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
     
    onSubmit(data: any) {

        this.isSubmitted = true;
        if (this.careerDetails.valid) {
            this.toastr.success(' Succesfully Saved !!');
            alert(JSON.stringify(data))
        }
       
      }
    


}