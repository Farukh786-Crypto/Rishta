import {Injectable} from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registerprofile } from 'src/app/model';


@Injectable()


export class RegService{
    private url='http://192.168.0.123:8080/api/registers'
    constructor(private http:HttpClient){
 }

    // public getSingleRegisterUsers(no:number):Observable<Registerprofile>{
    //     let url='http://192.168.0.123:8080/api/registers/getRegisterById/'+no
    //     return this.http.get<Registerprofile>(url);
    // }




    addContent(content:Registerprofile):Observable<Registerprofile>{

        const httpOption = {headers:new HttpHeaders({'Content-Type':'application/json'})};
        return this.http.post<Registerprofile>(this.url+'content/',content,httpOption);

    }    


    // public getSingleRegisterUsers(no:number){
    //     let url='http://192.168.0.123:8080/api/registers/getRegisterById/'+no
    //     return this.http.get(url);
    // }




    // public saveUser(userModel:any){
    //     let url='https://reqres.in/api/users'
    //    return this.http.post(url, userModel);
    // }

    // public savePostInfo(data){
    //     let url='https://reqres.in/api/users'
    //     return this.http.post(url,data);
    // }

    
    
}


