import {Injectable} from '@angular/core'
import { HttpClient, HttpHeaders ,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CareerProfile } from 'src/app/model';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
 
export class CareerService{
<<<<<<< HEAD
  

  constructor(private http: HttpClient) { }

  getall(){
    let url='http://192.168.0.120:8082/api/masters'     
         return this.http.get(url);    
  }
  getOne(){
    let url='http://192.168.0.120:8082/api/occupation'     
         return this.http.get(url);    
  }
  getTwo(){
    let url='http://192.168.0.120:8082/api/emplyeed'     
         return this.http.get(url);    
  }
  getThree(){
    let url='http://192.168.0.120:8082/api/bachlore'     
         return this.http.get(url);    
  }
  private url='http://192.168.0.127:8082/api/addcarrierdetails'
  addContent(content:CareerProfile):Observable<CareerProfile>{

    const httpOption = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.post<CareerProfile>(this.url+'/create',content,httpOption);

}    

  getCountries() {
    let url='http://192.168.0.127:8082/api/getcountries'     
         return this.http.get(url);    
  }

  getStates(country_id:number) {
    let url='http://192.168.0.127:8082/api/getstates/'+country_id;
    return this.http.get(url);     
  }
  getCities(state_id:number)
  {
    let url='http://192.168.0.127:8082/api/getcities/'+state_id;
    return this.http.get(url);     
  }

  

   
}
   
=======
    
    constructor(private http:HttpClient){
    }
    
    // public getuserCareerProfile(no:number){
    //       let url='http://192.168.0.120:8080/api/master/getAll'
    //         return this.http.get(url);
    // }
      public getall(){
        let url='http://192.168.0.120:8080/api/master/getAll'
        return this.http.get(url);
      }   

      
      // getAllStates(): Observable<IdName[]> {
      //  const URL = '/api/tc/customer/state';
      //  return this.httpClient.get<IdName[]>(AppSettings.API_ENDPOINT + URL);
      //  }

      // -------------- Sujata -------

      
      // getAllDistict(state_id: number[]): Observable<IdName[]> {
      //   const URL = '/api/tc/customer/state/' + state_id + '/alldistrict';
      //   return this.httpClient.get<IdName[]>(AppSettings.API_ENDPOINT + URL, { params: new HttpParams().set('stateId', state_id.toString()) });
        // }
    }
    // private careerlist:[{
    //     Country:'india',
    // State:'maharasthra',
    // City: 'solapur',
    // Pincode:413221, 
    // HighestDegree:'mba',  
    // Emplyeed: ' govt',
    // Occupation: 'it', 
    // Income: 12000,
    // Express:'you'
    // }] 
>>>>>>> 22a3c55fe726d4251c19d4213ec2b41b04430d89
