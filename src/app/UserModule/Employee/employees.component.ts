import { Component } from '@angular/core';
import { EmployeesService } from 'src/app/shared/employees.service';

@Component({
selector:'app-employees',
templateUrl:'./employees.component.html',
styleUrls:['../user.component.css']

})
export class employeecomponent{

    constructor(private service:EmployeesService)
    {

    }

}