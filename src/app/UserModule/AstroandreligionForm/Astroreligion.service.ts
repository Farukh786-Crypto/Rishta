import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AstroandReligion } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class AstroreligionService {
  private url = 'http://192.168.0.109:8080/api/users/getAll/'
  constructor(private http: HttpClient) { }
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
  //  getAllAstroreligion(): Observable<AstroandReligion[]> {
  //     return this.http.get<AstroandReligion[]>(this.url);
  //   }
  public getMaritalStatus() {
    let url = 'http://192.168.0.120:8080/api/MaritalStatus/getAll'
    return this.http.get(url);
  }
  public getMothertounge() {
    let url = 'http://192.168.0.127:8082/api/getmothertoungue'
    return this.http.get(url);
  }
  public getReligion() {
    let url = 'http://192.168.0.127:8082/api/religion/getReligion'
    return this.http.get(url);
  }
  public getCaste(religion_Id: number) {
    let url = 'http://192.168.0.127:8082/api/caste/getCaste' + religion_Id
    return this.http.get(url);
  }
  public getSubcaste(caste_id: number) {
    let url = 'http://192.168.0.127:8082/api/caste/getSubcaste' + caste_id;
    return this.http.get(url);
  }
  public getDevak() {
    let url = 'http://192.168.0.120:8080/api/devak/getAll';
    return this.http.get(url);
  }
  public getGotra() {
    let url = 'http://192.168.0.120:8080/api/gotra/getAll';
    return this.http.get(url);
  }
  public getHoroscope() {
    let url = 'http://192.168.0.120:8080/api/horoscope/getAll';
    return this.http.get(url);
  }
  public getnakshtra() {
    let url = 'http://192.168.0.120:8080/api/nakshtra/getAll';
    return this.http.get(url);
  }
  public getManglik() {
    let url = 'http://192.168.0.120:8080/api/manglik/getAll';
    return this.http.get(url);
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