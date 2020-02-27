import {Injectable} from '@angular/core'
import { HttpClient, HttpHeaders ,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EducationProfile } from 'src/app/model';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
 
export class EducationService{ 
  constructor(private http: HttpClient) { }
gethighestDegree() {
    let url='http://192.168.0.127:8082/api/gethighestDegree'     
         return this.http.get(url);    
  }
  getgraduationDegree(country_id:number) {
    let url='http://192.168.0.127:8082/api/getgraduationDegree';
    return this.http.get(url);     
  }
  private url='http://192.168.0.127:8082/api/addeduacationDetails'
  addContent(content:EducationProfile):Observable<EducationProfile>{
    const httpOption = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.post<EducationProfile>(this.url+'/create',content,httpOption);
}  
}