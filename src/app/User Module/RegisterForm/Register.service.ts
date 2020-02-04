import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()


export class RegService{

    constructor(private http:HttpClient){
 }

    public getSingleRegisterUsers(no:number){
        let url='http://192.168.0.123:8080/api/registers/getRegisterById/'+no
        return this.http.get(url);
    }


    // public saveUser(userModel:any){
    //     let url='https://reqres.in/api/users'
    //    return this.http.post(url, userModel);
    // }

    // public savePostInfo(data){
    //     let url='https://reqres.in/api/users'
    //     return this.http.post(url,data);
    // }

    
    
}


