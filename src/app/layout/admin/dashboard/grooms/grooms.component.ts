import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Router } from '@angular/router';
import { ViewService } from '../view/view.service';

@Component({
  selector: 'app-grooms',
  templateUrl: './grooms.component.html',
  styleUrls: ['./grooms.component.css'],
  providers:[DataService]
})
export class GroomsComponent implements OnInit {
  myDetail:any

  constructor(private data:DataService,private route:Router) { }

  ngOnInit() {
    this.getGroomsData();
  }
  
  public getGroomsData()
  {
  
    this.data.getGrooms().subscribe(
      response=>{
      this.myDetail=response
      },
      error=>{this.myDetail=error}
      )
  }


}
