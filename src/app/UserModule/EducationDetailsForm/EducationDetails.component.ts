import { Component, OnInit } from '@angular/core'
import { FormControl, Validators, FormGroup } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { EducationProfile } from 'src/app/model';
import { EducationService } from './EduacationDetails.service';

@Component({
    selector: 'education-comp',
    templateUrl: './EducationDetails.component.html',
    styleUrls: ['../user.component.css', './EduacationDetails.component.css'],
    providers: [EducationService]
})
export class EducationComponent implements OnInit {
    title: string = 'Education Demo Component '
    EduacationDetails: FormGroup
    str: string
    disabled: boolean
    isSubmitted: boolean;
    highestDegree: {};
    graduationDegree: {};
    constructor(private toastr: ToastrService, private Education: EducationService) { }
    public EducationPost: any;

    public EducationUser(content: EducationProfile) {

        this.Education.addContent(content).subscribe(res => {

            this.EducationPost = res,
                this.toastr.success('Sucess!!')
        },
            err => { this.EducationPost = err })
    }
    ngOnInit() {
        this.EduacationDetails = new FormGroup({
            AEduacation: new FormControl('', Validators.required),
            HighestDegree: new FormControl('', [Validators.required]),
            GraduationDegree: new FormControl('', [Validators.required]),
            GraduationCollage: new FormControl('', [Validators.required]),
            SchoolName: new FormControl('', [Validators.required]),
        })
    }
    onSubmit(data: any) {
        this.isSubmitted = true;
        if (this.EduacationDetails.valid) {
            alert(JSON.stringify(data));

        }
        else {
            // alert(JSON.stringify(this.careerDetails.value));
            return false;
        }

    }




}







