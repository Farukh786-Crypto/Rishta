import{ Component }from '@angular/core'
import { ToastrService } from 'ngx-toastr';
@Component({
selector:'Lifestyle-Comp',
templateUrl:'./LifestyleDetails.component.html'

 
})
export class LifestyleComponent{
title:string='Lifestyle Component demo'
constructor(private toastr: ToastrService) {}
 
showSuccess() {
  this.toastr.success('Success');
}
}