import { Component } from '@angular/core'
import { ViewService } from './view.service'


@Component({
    selector : 'view-comp',
    templateUrl : './view.component.html',
    styleUrls : ['./view.component.css'],  
     providers : [ViewService]
    
})

export class viewComponent
{
    view:any
    constructor(private vc:ViewService)
    {
 
    }
    public getAll()
    {
        this.vc.getView().subscribe(res=>{this.view=res},err=>{this.view=err})
    }
}