import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileDetailsService {

  constructor(private http: HttpClient) { }

  public getMothertounge() {
    let url: ''
    return this.http.get(url);

  }

}
