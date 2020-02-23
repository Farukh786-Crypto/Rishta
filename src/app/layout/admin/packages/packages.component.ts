import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  silverPack:number = 1530;
  goldPack:number = 2400;
  diamondPack:number = 3150;
  constructor() { }

  ngOnInit() {
  }

}
