import{ Component } from '@angular/core'
import{FormControl, Validators,FormGroup}from'@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { AstroreligionService } from './Astroreligion.service';
import { AstroandReligion } from 'src/app/model';

@Component({
    selector:'Astroreligion-comp',
    templateUrl:'./Astroreligion.component.html',
    styleUrls: ['./Astroreligion.component.css',
                '../user.component.css'],
    providers: [AstroreligionService]
})
export class AstroreligionComponent{
title:string='Astro and Religion  '
AstroreligionDetails:FormGroup
str:string
disabled:boolean
isSubmitted:boolean;
allmaritalstatus:{};
allmothertounge:{};
allreligions:{};
allcastes:{};
allsubcastes:{};
allgetDevak:{};
allgetGotra:{};
allgetHoroscope:{};
allnakshtra:{};
allgetManglik:{};
breakpoint: number;
constructor(private toastr: ToastrService,private astrotreligion:AstroreligionService){
    this.AstroreligionDetails=new FormGroup({
        maritalstatus:new FormControl('',Validators.required),
        mothertongue:new FormControl('',[Validators.required]),
        religion:new FormControl('',[Validators.required]),
        caste:new FormControl('',[Validators.required]),
        subcaste:new FormControl('',[Validators.required]),
        devak:new FormControl('',[Validators.required]),
        gotra:new FormControl('',[Validators.required]),
        horoscope:new FormControl('',[Validators.required]),
        nakshtra:new FormControl('',[Validators.required]),
        manglik:new FormControl('',[Validators.required])
    }) 
    }
    astroreligion: AstroandReligion[];

    ngOnInit() {

        /** spinner starts on init */
    // this.spinner.show();

    this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
    this.astrotreligion.getMaritalStatus().subscribe(
        maritaldata=>this.allmaritalstatus=maritaldata
    );
    this.astrotreligion.getMothertounge().subscribe(
      data=>this.allmothertounge=data
      );
    this.astrotreligion.getReligion().subscribe(
        data=>this.allreligions=data
      );
      this.astrotreligion.getDevak().subscribe(
            devakdata=>this.allgetDevak=devakdata
      );
      this.astrotreligion.getGotra().subscribe(
          gotradata=>this.allgetGotra=gotradata
      );
      this.astrotreligion.getHoroscope().subscribe(
          horoscopedata=>this.allgetHoroscope=horoscopedata
      );
    this.astrotreligion.getnakshtra().subscribe(
        nakshtradata=>this.allnakshtra=nakshtradata
    );
    this.astrotreligion.getManglik().subscribe(
        manglikdata=>this.allgetManglik=manglikdata
    );
    // setTimeout(() => {
      /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    // }, 2000);

      }

      onChangeSubCaste(caste_id: number) {
        // if (religion_Id) {
          this.astrotreligion.getSubcaste(caste_id).subscribe(
            data => 
              this.allsubcastes = data
             // this.subcastes = null;
            
          );
            }

            onResize(event) {
                this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 2;
              }

    // getAllAstroreligion() 
    // {
    //     this.astrotreligion.getAllAstroreligion().subscribe(
    //           (data: AstroandReligion[]) =>
    //         {
    //             this.astroreligion = data;
    //         },
    //           (error) => 
    //         {
    //             this.astroreligion = error;
    //         }
    //     )
    // }
    onSubmit(data:any)
    {
        this.isSubmitted=true;
        if(this.AstroreligionDetails.valid)
        { 
            return false;
        }
        else
        {
            // alert(JSON.stringify(this.careerDetails.value));
            this.isSubmitted = true;
            if (this.AstroreligionDetails.invalid){
            alert(JSON.stringify(data));
            this.toastr.success('Success!!', 'Astro and Religion form Succesfully sent !!');
        }   
    }
}
}