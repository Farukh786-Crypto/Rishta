import {Injectable} from '@angular/core'
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registerprofile, feedbackprofile } from 'src/app/model';


@Injectable()


export class FeedbackService{
    private url='http://192.168.0.120:8080/api/feedback/create'
    constructor(private http:HttpClient){
 }

    // public getSingleRegisterUsers(no:number):Observable<Registerprofile>{
    //     let url='http://192.168.0.123:8080/api/registers/getRegisterById/'+no
    //     return this.http.get<Registerprofile>(url);
    // }

    addContent(feedbackprofile:feedbackprofile):Observable<feedbackprofile>{

        const httpOption = {headers:new HttpHeaders({'Content-Type':'application/json' },)};
        return this.http.post<feedbackprofile>(this.url,feedbackprofile,httpOption);

    }    

    // public getSingleRegisterUsers(no:number){
    //     let url='http://192.168.0.123:8080/api/registers/getRegisterById/'+no;
    //     console.log(this.http.get(url));
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