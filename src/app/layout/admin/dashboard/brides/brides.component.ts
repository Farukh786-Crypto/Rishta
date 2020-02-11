import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { ViewService } from '../view/view.service';

@Component({
  selector: 'app-brides',
  templateUrl: './brides.component.html',
  styleUrls: ['./brides.component.css'],
  providers:[DataService,ViewService]
})
export class BridesComponent implements OnInit {

  myDetail:any
  constructor(private data:DataService,private view:ViewService) { }

  ngOnInit() {
    this.getAllData();
  }
  detail:any
  getAllDetails()
  {
      this.view.getView().subscribe
      (
        response=>{this.detail=response},
        error=>{this.detail=error}
        );
      
  }
  public getAllData()
  {
  
    this.data.getData().subscribe(
      response=>{
      this.myDetail=response
      },
      error=>{this.myDetail=error}
      )
  }
 

}
