import {Injectable} from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AstroandReligion } from 'src/app/model';



@Injectable({
    providedIn: 'root'
})


export class AstroreligionService{
     private url='http://192.168.0.109:8080/api/users/getAll/'
     constructor(private http:HttpClient){}
    //  currentAstroandReligion:AstroandReligion={
    //     maritalstatus:'',
    //     mothertongue:'',
    //     religion:'',
    //     caste:'',
    //     subcaste:'',
    //     devak:'',
    //     gotra:'',
    //     horoscope:'',
    //     nakshtra:'',
    //     manglik:'',        
    //  }
     getAllAstroreligion(): Observable<AstroandReligion[]> {
        return this.http.get<AstroandReligion[]>(this.url);
      }
     
    // updateContent(content : AstroandReligion) : Observable<AstroandReligion> {
    //     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    //     return this.http.put<AstroandReligion>(this.url + 'UpdateContent',  
    //     content, httpOptions);
    //   }

    //   deleteContent(content_id : number): Observable<number> {  
    //     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    //     return this.http.delete<number>(this.content_url + 'content/DeleteContent/' +content_id,  
    //     httpOptions);
    //   }
}