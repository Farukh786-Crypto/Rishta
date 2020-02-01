import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable()


export class RegisterService{

    constructor(private http:HttpClient){

    }

    public getUser(){

        let url='';
        return this.http.get(url);
    }


}









