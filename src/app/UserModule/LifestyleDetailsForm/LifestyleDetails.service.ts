import {Injectable} from '@angular/core'
import { HttpClient, HttpHeaders ,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CareerProfile } from 'src/app/model';
import { LifestyleProfile } from 'src/app/model';

@Injectable()
 
export class LifestyleService{ 

  constructor(private http: HttpClient) { }
}