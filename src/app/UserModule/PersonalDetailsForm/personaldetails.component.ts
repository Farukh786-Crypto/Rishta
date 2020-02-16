import { Component } from '@angular/core'
import { FormControl, Validators, FormGroup } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'personaldetail-comp',
    templateUrl: './personaldetails.component.html',
    styleUrls:['../user.component.css','./personaldetails.component.css']
})

export class PersonalDetailsComponent {
    title: string = 'PersonalDetails Component '
    PersonalDetails: FormGroup
    Blood_group:   {};
            Height:   {};
            Body_type:  {};             
            Physical_disability:   {};
            Lens:   {};
            Spectacle:  {};
            Complexion:   {};
            NRIS:   {};
            Smoking:   {};
            Drinking:  {};
            Eating_habits:  {};
    str: string
    disabled: boolean
    isSubmitted: boolean;
    constructor(private toastr: ToastrService) {

        this.PersonalDetails = new FormGroup({
            blood_group: new FormControl('', Validators.required),
            height: new FormControl('', [Validators.required]),
            weight: new FormControl('', [Validators.required]),
            body_type: new FormControl('', [Validators.required]),
            // personality: new FormControl('', [Validators.required]),
            physical_disability: new FormControl('', [Validators.required]),
            lens: new FormControl('', [Validators.required]),
            spectacles: new FormControl('', [Validators.required]),
            complexion: new FormControl('', [Validators.required]),
            NRI: new FormControl('', [Validators.required]),
            smoking: new FormControl('', [Validators.required]),
            drinking: new FormControl('', [Validators.required]),
            eating_habits: new FormControl('', [Validators.required]),

        })

    }

    onSubmit(data: any) {
        this.isSubmitted = true;
        if (this.PersonalDetails.valid) {
            return false;
        }
        else {
            // alert(JSON.stringify(this.careerDetails.value));
            this.isSubmitted = true;
            if (this.PersonalDetails.invalid) {
                alert(JSON.stringify(data));
                this.toastr.success('Success!!', 'Personal Details form Succesfully sent !!');
            }
        }
    }
}