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
    styleUrls: ['./Register.component.css'],
    providers: [RegService]

})



export class RegisterFormComponent {
    disabledAgreement: boolean = true
    RegisterModel: FormGroup
    isSubmited: boolean;
    required: Boolean;
    disableRipple: Boolean;
    pCreated: profCreated[] = [{ value: 'self', viewValue: 'Self' }, { value: 'parent', viewValue: 'Parent' }]

    constructor(private toastr: ToastrService, private register: RegService, private _router: Router) {


        this.RegisterModel = new FormGroup({

            username: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4}))$/)]),
            password: new FormControl('', [Validators.required,  Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
            mobile: new FormControl('', [Validators.required, Validators.pattern(/^(\+\d{0,1,3}[- ]?)?\d{10}$/)]),
           // password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
            mobileno: new FormControl('', [Validators.required, Validators.pattern(/^(\+\d{0,1,3}[- ]?)?\d{10}$/)]),
            profile: new FormControl('', [Validators.required]),
            gender: new FormControl('male', [Validators.required])
        })

        // this.pCreated=
    }


    public RegisterPost:any;
    
    public RegisterUser(content:Registerprofile){

        this.register.addContent(content).subscribe(res=>{

                     this.RegisterPost=res,
                    this.toastr.success('Sucess!!')
                    
                    
                    },
                     err=>{this.RegisterPost=err})
                     
                    
           }


    
    // public postRegisterInfo:any;
    // userId:number;
    // public SaveRegisterInfo(){
    //     this.re.getSingleRegisterUsers(this.userId).subscribe(res=>{

    //         this.postRegisterInfo=res;
    //         // this.RegisterModel.patchValue(res[0]);
    //         this.RegisterModel.patchValue(this.postRegisterInfo[0])
        
        
        
    //     },
    //             err=>{this.postRegisterInfo=err})

    public postRegisterInfo: any;
    userId: number;
    public SaveRegisterInfo() {
        // this.re.getSingleRegisterUsers(this.userId).subscribe(res=>{
        //     this.postRegisterInfo=res},
        //         err=>{this.postRegisterInfo=err})

        // this.register.getSingleRegisterUsers(this.userId).subscribe(

        //     res => {

        //         this.postRegisterInfo = res
        //         if (this.postRegisterInfo == "Record Update Sucessfully!!!") {
        //             // this.toastr.warning("User Has already signed up with this Number","Warning..!!");
        //             // this._router.navigate(['postRegisterInfo'])
        //         }
        //         else {
        //             this.toastr.success("User has Sucessfully Signed Up..!!");
        //         }
        //     }



                
        
    //     this.re.getSingleRegisterUsers(this.userId).subscribe(


    //         res=>{

    //                 this.postRegisterInfo=res
    //                 if(this.postRegisterInfo=="Record Update Sucessfully!!!"){
    //                         // this.toastr.warning("User Has already signed up with this Number","Warning..!!");
    //                         // this._router.navigate(['postRegisterInfo'])
    //                 }
    //                 else{
    //                     this.toastr.success("User has Sucessfully Signed Up..!!");
    //                 }
    //         }

    //     )


    // }



    // showSuccess() {
    //     this.toastr.success('Hello world!', 'Toastr fun!');
    //   }
    // loginUser(data: any) {

    //     this.isSubmited = true;
    //     if (this.RegisterModel.valid) {
    //         this.toastr.success('Hello world!', 'Register form Succesfully sent !!');
    //         alert(JSON.stringify(data))
    //     }

    // }
    }
}