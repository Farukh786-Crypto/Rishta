import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()

export class DashboardService
{
    constructor(private http:HttpClient)
    {

    }
  
    public getTotalCount()
    {
       let url='';
       return this.http.get(url);
    }

    public getGroomsCount()
    {
      let url='';
      return this.http.get(url);
    }

    public getBridesCount()
    {
        let url='';
        return this.http.get(url);
    }

}