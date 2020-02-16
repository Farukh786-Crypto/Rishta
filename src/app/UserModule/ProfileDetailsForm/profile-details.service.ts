import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileDetailsService {

  constructor(private http: HttpClient) { }

  public getMothertounge() {
    let url = 'http://192.168.0.127:8082/api/getmothertoungue'
    return this.http.get(url);

  }
  public getReligion() {
    let url = 'http://192.168.0.127:8082/api/religion/getReligion'
    return this.http.get(url);

  }
  public getCaste(religion_id: number) {
    let url = 'http://192.168.0.127:8082/api/caste/getCaste/' + religion_id;
    return this.http.get(url);
  }
  public getSubcaste(caste_id: number) {
    let url = 'http://192.168.0.127:8082/api/subcaste/getSubcaste/' + caste_id;
    return this.http.get(url);

  }
}
//   apiBaseUrl='http://locahost/dev/tcxapp';

// public getUsers()
// {
//     let url='https:/reqres.in/api/users?id=2'
//     //return this.http.get(url)
//     return this.http.get('${this.apiBaseUrl}api/countries');
//     // /api/users/2
// }


