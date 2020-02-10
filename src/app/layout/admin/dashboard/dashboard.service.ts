import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class DashboardService
{
    constructor(private http:HttpClient)
    {

    }

    public getTotalCount()
    {
        let url='http://192.168.0.136:8080/api/registers/getTotalMembers';
        return this.http.get(url);
    }
    public getGroomsCount()
    {
        let url='http://192.168.0.136:8080/api/registers/getTotalGrooms';
        return this.http.get(url);
    }
    public getBridesCount()
    {
        let url='http://192.168.0.136:8080/api/registers/getTotalBrides';
        return this.http.get(url);
    }
}