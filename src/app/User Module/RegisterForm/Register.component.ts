import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { RegService } from './Register.service';


@Component({

    selector: 'register-comp',
    templateUrl: './Register.component.html',
    styleUrls: ['./Register.component.css'],
    providers:[RegService]

})


export class RegisterFormComponent {
    disabledAgreement: boolean = true
    RegisterModel: FormGroup
    isSubmited: boolean;
    required: Boolean;
    disableRipple: Boolean;
    constructor(private toastr: ToastrService,private re:RegService) {

        this.RegisterModel = new FormGroup({

            UserName: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4}))$/)]),
            password: new FormControl('', [Validators.required,  Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
            mobileno: new FormControl('', [Validators.required, Validators.pattern(/^(\+\d{0,1,3}[- ]?)?\d{10}$/)]),
            profile: new FormControl('', [Validators.required]),
            gender: new FormControl('male',[Validators.required])
        })
    }


    
    public postRegisterInfo:any;
    userId:number;
    public SaveRegisterInfo(){
        this.re.getSingleRegisterUsers(this.userId).subscribe(res=>{
            this.postRegisterInfo=res},
                err=>{this.postRegisterInfo=err})
        

    }



    // showSuccess() {
    //     this.toastr.success('Hello world!', 'Toastr fun!');
    //   }
    loginUser(data: any) {

        this.isSubmited = true;
        if (this.RegisterModel.valid) {
            this.toastr.success('Hello world!', 'Register form Succesfully sent !!');
            alert(JSON.stringify(data))
        }

    }



}