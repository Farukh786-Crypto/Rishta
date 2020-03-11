import{ Component }from '@angular/core'
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators,NgForm } from '@angular/forms'
import { LifestyleProfile } from 'src/app/model';
import { LifestyleService } from './LifestyleDetails.service';
@Component({
selector:'Lifestyle-Comp',
templateUrl:'./LifestyleDetails.component.html',
styleUrls:['../user.component.css','./LifestyleDetails.component.css'],
providers: [LifestyleService] 
})
export class LifestyleComponent{
  LifestyleModel: FormGroup
  isSubmited: boolean;
  breakpoint: number;
  title:string='Lifestyle Component demo'
constructor(private toastr: ToastrService,  ){
  this.LifestyleModel = new FormGroup({
    
//house: new FormControl('', [Validators.required]),
//car: new FormControl('', [Validators.required]),
Languages: new FormControl('', [Validators.required]),
Food: new FormControl('', [Validators.required]),
Books: new FormControl('', [Validators.required]),
Favouritefood: new FormControl('', [Validators.required]),
sports: new FormControl('', [Validators.required]),
Music: new FormControl('', [Validators.required]),
Interests: new FormControl('', [Validators.required]),
Destination: new FormControl('', [Validators.required]),
Movies: new FormControl('', [Validators.required]),
drink: new FormControl('', [Validators.required]),
smoke: new FormControl('', [Validators.required]),
  });
}
ngOnInit() {
  this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;
}
onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
}
onSaveSuccess(data: any) {
  this.isSubmited = true;
  if (this.LifestyleModel.valid) {
      this.toastr.success(' Succesfully Saved !!');
      alert(JSON.stringify(data))
  }
}
onFormSubmit(form:NgForm)  
  {  
    console.log(form);  
  }  
}



 
   

//constructor(private toastr: ToastrService,private _bottomSheet: MatBottomSheet) {}
// openBottomSheet(): void {
//   this._bottomSheet.open(LifestyleComponent);
// }
 
