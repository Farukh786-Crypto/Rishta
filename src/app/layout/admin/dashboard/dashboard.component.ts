import { Component } from '@angular/core'
import { DashboardService } from './dashboard.service';


@Component({
    selector : 'dash-comp',
    templateUrl : 'dashboard.component.html',
    styleUrls : ['dashboard.component.scss'],
    providers:[DashboardService]
})
export class DashboardComponent{
    constructor(private count:DashboardService)
    {
        this.getTotalCount();
        this.getGroomsCount();
        this.getBridesCount();
    }
   
    total:any
    grooms:any
    brides:any

    public getTotalCount()
    {
        this.count.getTotalCount().subscribe(
            response=>{this.total=response},error=>{this.total=error}
        )
    }
    public getGroomsCount()
    {
        this.count.getGroomsCount().subscribe(
            response=>{this.grooms=response},error=>{this.grooms=error}
        )
    }
    public getBridesCount()
    {
        this.count.getBridesCount().subscribe(
            response=>{this.brides=response},error=>{this.brides=error}
        )
    }
}