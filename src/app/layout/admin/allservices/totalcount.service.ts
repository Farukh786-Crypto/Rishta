import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
 
export class TotalCountService{
    constructor(private http:HttpClient)
    {

    }

  public getTotalMembers()
  {
      let url=''
      return this.http.get(url);
  }
 
  public getTotalGrooms()
  {
    let url=''
    return this.http.get(url);
  }
  public getTotalBrides()
  {
    let url=''
   return this.http.get(url);
  }
}