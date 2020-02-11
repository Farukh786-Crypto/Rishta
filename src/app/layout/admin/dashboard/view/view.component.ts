import { Component } from '@angular/core'
import { ViewService } from './view.service'
import { analyzeAndValidateNgModules } from '@angular/compiler'


@Component({
    selector : 'view-comp',
    templateUrl : './view.component.html',
    styleUrls : ['./view.component.css'],
   providers : [ViewService]
})

export class ViewComponent
{
  

}