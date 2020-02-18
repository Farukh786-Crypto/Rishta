import {Injectable} from '@angular/core';
import {Router,CanActivate} from '@angular/router';

@Injectable({
    providedIn:'root'
})

export class UsersAuthGuard implements CanActivate{


    constructor(private router:Router){}
    canActivate()
    {
        if(sessionStorage.getItem('userRole')==='user')
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