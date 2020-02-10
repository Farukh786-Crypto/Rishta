import { Component } from '@angular/core'
import { TotalCountService } from '../allservices/totalcount.service'
import { Observable } from 'rxjs'
@Component({
    selector : 'dash-comp',
    templateUrl : 'dashboard.component.html',
    styleUrls : ['dashboard.component.scss'],
    providers : [TotalCountService]
})
export class DashboardComponent{
    constructor(private data:TotalCountService)
    {
       this.getAllCount() 
    }
    totalMembers:any;
    totalBrides:any;
    totalGrooms:any;

    public getAllCount()
    {
     this.data.getTotalMembers().subscribe(res=>{this.totalMembers=res},
                                                err=>{this.totalMembers=err})

     this.data.getTotalBrides().subscribe(res=>{this.totalBrides=res},
                                              err=> {this.totalBrides=err})

     this.data.getTotalBrides().subscribe(res=>{this.totalGrooms=res},
                                                err=> {this.totalGrooms=err})
                                            }
    
}