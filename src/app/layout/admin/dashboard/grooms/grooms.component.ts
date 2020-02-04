import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-grooms',
  templateUrl: './grooms.component.html',
  styleUrls: ['./grooms.component.css'],
  providers:[DataService]
})
export class GroomsComponent implements OnInit {
  myDetail:any

  constructor(private data:DataService) { }

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
  uid: number
  public search() {
      this.data.getSingleUsers(this.uid).subscribe(res => {
          if (res && res['data']) {

              this.myDetail = res['data']
          }
      }, err => { this.myDetail= err })
  }


}
