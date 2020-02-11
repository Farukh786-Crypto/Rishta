import{ Component } from '@angular/core'
import{FormControl, Validators,FormGroup}from'@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { AstroreligionService } from './Astroreligion.service';
import { AstroandReligion } from 'src/app/model';
@Component({
    selector:'Astroreligion-comp',
    templateUrl:'./Astroreligion.component.html',
    styleUrls: ['./Astroreligion.component.css'],
    providers: [AstroreligionService]
})
export class AstroreligionComponent{
title:string='Astroreligion Demo Component '
AstroreligionDetails:FormGroup
str:string
disabled:boolean
isSubmitted:boolean;
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
        this.getAllAstroreligion();
        // this.empSrv.getAllEmployees().subscribe(data => this.allEmployee = data)
      }

    getAllAstroreligion() 
    {
        this.astrotreligion.getAllAstroreligion().subscribe(
              (data: AstroandReligion[]) =>
            {
                this.astroreligion = data;
            },
              (error) => 
            {
                this.astroreligion = error;
            }
        )
    }
   
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
 // editContent(content : Content) {
    //     this.editFlag = true;
    //     this.btn_name = 'Update';
    //     this.contentIdUpdate = content.content_id;  
    //     // this.contentForm.controls['image'].setValue(content.image);
    //     // this.contentForm.controls['description'].setValue(content.description);
    //     // this.contentForm.controls['location'].setValue(content.location); 
    //     // this.contentForm.controls['menu_id'].setValue(content.menu_id); 
    //     this.contentForm.patchvalue(content);   
    // }
    // updateContent(content : Content) { 
    //     console.log(content);   
    //     if(this.contentIdUpdate == null){
    //       this.content_service.addContent(content).subscribe(  
    //         () => {  
    //           // this.contentIdUpdate = null;  
    //           this.toaster.success('Content added successfully');
    //           this.contentForm.reset();  
    //         }
    //       );  
    //     }
    //     else{
    //       content.content_id = this.contentIdUpdate;
    //       this.content_service.updateContent(content).subscribe(() => {  
    //         this.contentIdUpdate = null;
    //         this.toaster.success('Content updated successfully');
    //         this.contentForm.reset();  
    //       });
    //     }
    //   }
