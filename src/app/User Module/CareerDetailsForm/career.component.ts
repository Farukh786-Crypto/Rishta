import{Component, OnInit} from '@angular/core'
import{FormControl, Validators,FormGroup}from'@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { CareerService } from './career.service';//imported
import { Observable } from 'rxjs';  
import { CareerProfile } from 'src/app/model';
@Component({
selector:'career-comp',
templateUrl:'./career.component.html',
styleUrls: ['./career.component.css'],
providers: [CareerService]
})


export class CareerComponent implements OnInit{
 
    title:string='career Demo Component '
    careerDetails:FormGroup
     country:{};
     state:{};
    city:{};
    bachlorDegree:{};
    highestDegree:{};  
    emplyeed:{}; 
    occupation:{}; 
    
     
    CareerService: any;
 
     
    constructor( private toastr: ToastrService,private Career: CareerService) { }
    call_to_service(){
        this.SaveCareerInfo();
        this.SaveCareerInfo1();
        this.SaveCareerInfo2();
      }
    
      //firstCareerId: number=1;
      public getCareerInfo: any;
      public getCareerInfo1: any;
      public getCareerInfo2: any;
      public getCareerInfo3: any;
      
      public SaveCareerInfo() {
            //console.log("hhhhh")
        this.Career.getall().subscribe(res=>{this.getCareerInfo=res,
        console.log(JSON.stringify(res)) },
               err=>{this.getCareerInfo=err})
 
               this.careerDetails.patchValue(this.getCareerInfo[0])
        }
        public SaveCareerInfo1() {
            //console.log("hhhhh")
        this.Career.getOne().subscribe(res=>{this.getCareerInfo1=res,
        console.log(JSON.stringify(res)) },
               err=>{this.getCareerInfo1=err})

               this.careerDetails.patchValue(this.getCareerInfo1[0])
        }
        public SaveCareerInfo2() {
            //console.log("hhhhh")
        this.Career.getTwo().subscribe(res=>{this.getCareerInfo2 =res,
        console.log(JSON.stringify(res)) },
               err=>{this.getCareerInfo2=err})

               this.careerDetails.patchValue(this.getCareerInfo2[0])
        }
        public SaveCareerInfo3() {
            //console.log("hhhhh")
        this.Career.getThree().subscribe(res=>{this.getCareerInfo3=res,
        console.log(JSON.stringify(res)) },
               err=>{this.getCareerInfo3=err})

               this.careerDetails.patchValue(this.getCareerInfo3[0])
        }

    
    
    ngOnInit() {  
        this.Career.getCountries().subscribe(
            data => this.country = data
          );
        this.careerDetails=new FormGroup({
            Country:new FormControl('',Validators.required),
        State:new FormControl('',[Validators.required]),
        City:new FormControl('',[Validators.required]),
        HighestDegree:new FormControl('',[Validators.required]),
        BachlorDegree:new FormControl('',[Validators.required]),
        Emplyeed:new FormControl('',[Validators.required]),
        Occupation:new FormControl('',[Validators.required]),
        Income:new FormControl('',[Validators.required]),
        Express:new FormControl('',[Validators.required])
        });
    }
    public CareerPost:any;
    
    public RegisterUser(content:CareerProfile){

        this.Career.addContent(content).subscribe(res=>{

                     this.CareerPost=res,
                    this.toastr.success('Sucess!!')
                    
                    
                    },
                     err=>{this.CareerPost=err})
                     
                    
           }
    express:string;
    income:number;
    clear(){
        this.careerDetails=null    
       

        }    

    
 


    
        onChangeCountry(CountryId:number) {
            if(CountryId){
                this.Career.getStates(CountryId).subscribe(
                    data=>{this.state=data;
                    this.city=null; }                   ); 
            } 
        else{this.state=null;
            this.city=null;

        }             } 


            onChangeState(StateId:number) {
                if(StateId){
                    this.Career.getCities(StateId).subscribe(
                        data=>this.city=data
                        
                        ); 
                }  
                else {
                    this.city= null;}
                }       


}
