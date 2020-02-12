import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { RegService } from './Register.service';
import {Router} from '@angular/router';
import { Registerprofile } from 'src/app/model';

export interface profCreated {
    value: string;
    viewValue: string;
}

@Component({

    selector: 'register-comp',
    templateUrl: './Register.component.html',
    styleUrls: ['./Register.component.css',
                  '../user.component.css'],
    providers: [RegService]

})

export class RegisterFormComponent {

    states: string[] = [
        'Self', 'Parents'
    ];

    createdby=[
        {id:1,value:'Self'},
        {id:2,value:'Parents'}
    ];

    disabledAgreement: boolean = true
    RegisterModel: FormGroup
    isSubmited: boolean;
    required: Boolean;
    title:'Farukh';
    hide = true;
    
    disableRipple: Boolean;
    pCreated: profCreated[] = [{ value: 'self', viewValue: 'Self' }, { value: 'parent', viewValue: 'Parent' }]

    constructor(private toastr: ToastrService,private register: RegService, private _router: Router) {


        this.RegisterModel = new FormGroup({

            username: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4}))$/)]),
            password: new FormControl('', [Validators.required,  Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
            mobile: new FormControl('', [Validators.required, Validators.pattern(/^(\+\d{0,1,3}[- ]?)?\d{10}$/)]),
           // password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
            mobileno: new FormControl('', [Validators.required, Validators.pattern(/^(\+\d{0,1,3}[- ]?)?\d{10}$/)]),
            create_profile_by: new FormControl('', [Validators.required]),
            gender: new FormControl('male', [Validators.required]),
            date:new FormControl(new Date())

        })


    }




    
        // public postRegisterInfo:any;
        // userId:number;
        // public SaveRegisterInfo(){
        //     this.register.getSingleRegisterUsers(this.userId).subscribe(res=>{
                
        //         this.postRegisterInfo=res;
        //         console.log(res);
        //         this.RegisterModel.patchValue(res[0]);
        //         this.RegisterModel.patchValue(this.postRegisterInfo[0])
            
 
        //     },
        //             err=>{this.postRegisterInfo=err})
        // }
    
    public RegisterPost:any;
    
    public RegisterUser(content:Registerprofile){

        this.register.addContent(content).subscribe(res=>{

                     this.RegisterPost=res,
                    this.toastr.success('Sucess!!') 
                    },
                     err=>{this.RegisterPost=err})         
           }
        

        //    loginUser(data: any) {

        //         this.isSubmited = true;
        //         if (this.RegisterModel.valid) {
        //             this.toastr.success('Hello world!', 'Register form Succesfully sent !!');
        //             alert(JSON.stringify(data))
        //         }
        
        //     }
    
}


// console.log(customer);
//     this.customerService.editCustomer(customer, this.custId).subscribe(result => {
//       this.customerSaveResult = result;
//       console.log(this.customerSaveResult);
//       //this.router.navigate(['/customer/83']);
//       this.router.navigateByUrl("/customer/"+this.custId);
//     });


//    editCustomer(customer: Object, custId: number): Observable<any>{
        //     const httpOptions = {
        //       headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        //     };
        //     const URL = '/api/tc/customer/'+custId;
        //     return this.httpClient.put(AppSettings.API_ENDPOINT+URL, customer, httpOptions);
        //   }        