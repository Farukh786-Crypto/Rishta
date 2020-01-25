import{ Component } from '@angular/core'
import{FormControl, Validators,FormGroup}from'@angular/forms'
import { ToastrService } from 'ngx-toastr';
@Component({
selector:'Astroreligion-comp',
templateUrl:'./Astroreligion.component.html'
})

export class AstroreligionComponent{
title:string='Astroreligion Demo Component '
AstroreligionDetails:FormGroup
str:string
disabled:boolean
isSubmitted:boolean;
constructor(private toastr: ToastrService){

    this.AstroreligionDetails=new FormGroup({
        Marital_Status:new FormControl('',Validators.required),
        Mother_Tongue:new FormControl('',[Validators.required]),
        Religion:new FormControl('',[Validators.required]),
        Caste:new FormControl('',[Validators.required]),
        SubCaste:new FormControl('',[Validators.required]),
        Devak:new FormControl('',[Validators.required]),
        Gotra:new FormControl('',[Validators.required]),
        Horoscope:new FormControl('',[Validators.required]),
        Nakshtra:new FormControl('',[Validators.required]),
        Manglik:new FormControl('',[Validators.required])
    }) 
    
    }
    // WordCount(){
    //     var words = this.value.match(/\S+/g).length;
       
    //    if (words > 200) {
    //        // Split the string on first 200 words and rejoin on spaces
    //        var trimmed = $(this).val().split(/\s+/, 200).join(" ");
    //        // Add a space at the end to keep new typing making new words
    //        $(this).val(trimmed + " ");
    //    }

    //    else {
    //        $('#display_count').text(words);
    //        $('#word_left').text(200-words);
    //    }
    //     return this.str.split(" ").length;
    //     // return str.trim().split(/\s+/).length;
    //     // return this.str.split(" ").length;
    // }
    // console.log(WordCount());
     
    

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