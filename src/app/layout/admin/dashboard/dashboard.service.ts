import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
@Injectable()

export class DashboardService
{
     Base_Url : string =environment.Base_Url;
    constructor(private http:HttpClient)
    {

    }
   public getTotalCount()
    {
       
        let url= this.Base_Url + 'registers/getTotalMembers';
        return this.http.get(url);
    }
    public getGroomsCount()
    {
        
        let url= this.Base_Url +'registers/getTotalGrooms';
        return this.http.get(url);
    }
    public getBridesCount()
    {
       
        let url= this.Base_Url +'registers/getTotalBrides';
        return this.http.get(url);
    }
}