import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
@Injectable()

export class DashboardService
{
    constructor(private http:HttpClient)
    {
        

    }
   public getTotalCount()
    {
        const Base_Url=environment.Base_Url;
        let url= Base_Url + 'registers/getTotalMembers';
        return this.http.get(url);
    }
    public getGroomsCount()
    {
        const Base_Url=environment.Base_Url;
        let url= Base_Url +'registers/getTotalGrooms';
        return this.http.get(url);
    }
    public getBridesCount()
    {
        const Base_Url=environment.Base_Url;
        let url= Base_Url +'registers/getTotalBrides';
        return this.http.get(url);
    }
}