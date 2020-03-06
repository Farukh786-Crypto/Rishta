import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CareerProfile } from 'src/app/model';
@Injectable()
export class CareerService {
  constructor(private http: HttpClient) { }
  // url: string = "https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json";
   url: string ="http://192.168.0.122:8080/api/countries/countries";
  //   private url='http://192.168.0.127:8082/api/addcarrierdetails'
  //   addContent(content:CareerProfile):Observable<CareerProfile>{
  //     const httpOption = {headers:new HttpHeaders({'Content-Type':'application/json'})};
  //     return this.http.post<CareerProfile>(this.url+'/create',content,httpOption);
  // }    
  //url: string="http://192.168.0.122:8080/api/getdetails/Carrier"   
  allCountries(): Observable<any> {
    return this.http.get(this.url);
  }
}