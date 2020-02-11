import{Component} from '@angular/core'
import{FormControl, Validators,FormGroup}from'@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { CareerService } from './career.service';//imported
import { CareerProfile } from 'src/app/model';
@Component({
selector:'career-comp',
templateUrl:'./career.component.html',
styleUrls: ['./career.component.css'],
providers: [CareerService]
})

export class CareerComponent{
    states: string[] = [
        'Self', 'Parents'
    ];

title:string='career Demo Component '
careerDetails:FormGroup
str:string
disabled:boolean
isSubmitted:boolean;
careerDetailsInfo:any;
// --------- Sujata ----------------
// selectedStateId: number[];
//districts: IdName[];
//  states: IdName[]; districts: IdName[];
// ---------------------------------
//careerInfo:any
constructor(private toastr: ToastrService,private Career: CareerService){
    this.careerDetails=new FormGroup({
        Country:new FormControl('',Validators.required),
        // -------- Sujata --------
        //stateCtrl: ['', []],
        State:new FormControl('',[Validators.required]),
        City:new FormControl('',[Validators.required]),
        Pincode:new FormControl('',[Validators.required]),
        HighestDegree:new FormControl('',[Validators.required]),
        BachlorDegree:new FormControl('',[Validators.required]),
        Emplyeed:new FormControl('',[Validators.required]),
        Occupation:new FormControl('',[Validators.required]),
        Income:new FormControl('',[Validators.required]),
        Express:new FormControl('',[Validators.required])
    }) 
    
    }  
    
    // ----------------- Sujata -----------

    // getAllDistict(selectedStateId: number[]) {

    //     //  console.log(this.thirdFormGroup.controls.stateCtrl.value);
    //       if (selectedStateId.length === 0) return;
    //       this.customerService.getAllDistict(selectedStateId).subscribe(districts => {
    //         this.districts = districts;
    //       });
    //     }
    //     getAllTahsils(selectedDistrictId: number[]) {
    //       if (selectedDistrictId.length === 0) return;
    //       this.customerService.getAllTahsils(selectedDistrictId).subscribe(tahsils => {
    //         this.tahsils = tahsils;
    //       });
    //     }
     
    onSubmit(data: any) {

        this.isSubmitted = true;
        if (this.careerDetails.valid) {
            this.toastr.success(' Succesfully Saved !!');
            alert(JSON.stringify(data))
        }      
      }
    
      //firstCareerId: number=1;
      public getCareerInfo: any;
      
      public SaveCareerInfo() {
            //console.log("hhhhh")
        this.Career.getall().subscribe(res=>{this.getCareerInfo=res,
        console.log(JSON.stringify(res))
        },
               err=>{this.getCareerInfo=err})
        }    
}
    // public getAllUsersCareerProfile(){
    //     this.Career.getuserCareerProfile().subscribe(res=>{this.careerDetailsInfo=res};
    //         err=>{this.careerDetailsInfo=err};)
    //     } 



