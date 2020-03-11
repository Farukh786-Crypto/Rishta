import { Component ,EventEmitter,Output} from '@angular/core'
import { Router } from '@angular/router';
 
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls:['./user.component.css']
})
export class UserComponent {
    @Output() sidenavClose = new EventEmitter();
    bgColor:any='primary';
    color:any='accent';
    constructor(private router:Router) {
    }

    public onSidenavClose = () => {
        this.sidenavClose.emit();
      }
public SignOut()
{
    sessionStorage.clear();
    this.router.navigate(['./login']);
}
}