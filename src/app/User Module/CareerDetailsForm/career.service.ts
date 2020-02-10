import {Injectable} from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CareerProfile } from 'src/app/model';


@Injectable()
// public getsingleUsersCareerProfile(){
//     this.getCareerInfo=this.Career.getuserCareerProfile(this.firstCareerId)
//     let url='http://192.168.0.120:8080/api/master/getAll'
//     let url='http://192.168.0.120:8080/api/occupation/getAll' 
//     let url='http://192.168.0.120:8080/api/employeement/getAll'



//     return this.careerDetails.get(url);
// }


export class CareerService{
    
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
   

 