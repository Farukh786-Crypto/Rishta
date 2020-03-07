import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  state=['Pune','Nasik','Mumbai','Nagpur']
  contact=['7744332211',,'8252523252','8595982255','9876543210'    
  ]
  Address=[':Flat n0o. 101, Kranti chowk,pune',
  ':Flat n0o. 101, Kranti chowk,pune',
  ':Flat n0o. 101, Kranti chowk,pune',
  ':Flat n0o. 101, Kranti chowk,pune'

  ]
  contactperson=['Mahesh','Jayesh','Rituraj','Rakesh']

details=[{name:'Mahesh',state:'Pune',contact:'7744332211',address:'Flat n0o. 101, Kranti chowk,pune'},
{name:'Jayesh',state:'Nashik',contact:'8285675634',address:'Flat n0o. 102, Kranti chowk,pune'},
{name:'Rakesh',state:'Nashik',contact:'8285675634',address:'Flat n0o. 102, Kranti chowk,pune'}]



  constructor() { }
  ngOnInit() {
  }
} 