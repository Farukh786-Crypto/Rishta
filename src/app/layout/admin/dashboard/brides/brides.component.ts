import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-brides',
  templateUrl: './brides.component.html',
  styleUrls: ['./brides.component.css'],
  providers:[DataService]
})
export class BridesComponent implements OnInit {

  myDetail:any
  constructor(private data:DataService) { }

  ngOnInit() {
    this.getAllData();
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
  uid: number
  public search() {
      this.data.getSingleUsers(this.uid).subscribe(res => {
          if (res && res['data']) {

              this.myDetail = res['data']
          }
      }, err => { this.myDetail= err })
  }
  

}
