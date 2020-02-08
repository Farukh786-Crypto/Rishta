import { Component } from '@angular/core'
import { TotalBridesService } from '../allservices/totalcount.service';
@Component({
    selector : 'dash-comp',
    templateUrl : 'dashboard.component.html',
    styleUrls : ['dashboard.component.scss']
})
export class DashboardComponent{
    constructor(private data:TotalBridesService)
    {
        
    }
    public getAll()
    {
        this.data.getTotalMembers().
    }
    
}