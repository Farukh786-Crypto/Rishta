import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
 
export class TotalBridesService{
    constructor(private http:HttpClient)
    {

    }

  public getTotalMembers()
  {
      let url=''
      this.http.get(url);
  }
 
  public getTotalGrooms()
  {
    let url=''
    this.http.get(url);
  }
  public getTotalBrides()
  {
    let url=''
    this.http.get(url);
  }
}