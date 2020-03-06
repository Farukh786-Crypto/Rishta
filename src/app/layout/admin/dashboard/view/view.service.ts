import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
@Injectable()
export class ViewService
{
 constructor(private http:HttpClient)
 {

 }

 public getView()
 {
     let url=''
     return this.http.get(url);
 }
}