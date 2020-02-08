import {Injectable} from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { CareerProfile } from 'src/app/model';


@Injectable()


export class CareerService{
    private url='http://192.168.0.123:8080/api/registers'
    constructor(private http:HttpClient){
 }

 public getUsersCareerProfile(no:number){
         let url='http://192.168.0.123:8080/api/registers/getCareerById/'+no
         return this.http.get(url);
    }
    // public postRegisterInfo:any;
    // userId:number;
    // public SaveRegisterInfo(){
    //     this.register.getSingleRegisterUsers(this.userId).subscribe(res=>{

    //         this.postRegisterInfo=res;
    //         // this.RegisterModel.patchValue(res[0]);
    //         this.RegisterModel.patchValue(this.postRegisterInfo[0])
        
        
        
    //     },
    //             err=>{this.postRegisterInfo=err})
    // public getSingleRegisterUsers(no:number):Observable<Registerprofile>{
    //     let url='http://192.168.0.123:8080/api/registers/getRegisterById/'+no
    //     return this.http.get<Registerprofile>(url);
    // }


}
 