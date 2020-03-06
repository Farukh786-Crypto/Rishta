import { Injectable } from '@angular/core';
import {Router,CanActivate} from '@angular/router';
@Injectable({
    providedIn:'root'
})
export class AdminAuthGuard implements CanActivate{

    constructor(private router:Router){}
    canActivate()
    {
        if(sessionStorage.getItem('userRole')==='admin')
        {
            return true;
        }
        else
        {
            this.router.navigate(['./login']);
            return false;
        }

    }
}