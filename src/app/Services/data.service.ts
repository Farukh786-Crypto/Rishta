import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable()

export class DataService{
    constructor(private http:HttpClient){

    }
    public getData()
    {
       let url="assets/demo.json";
        return this.http.get(url);
    }
    public getGrooms()
    {
        let url="assets/demo.json";
        return this.http.get(url);
    }
   

}