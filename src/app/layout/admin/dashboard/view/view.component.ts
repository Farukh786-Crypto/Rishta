import { Component, OnInit, Inject } from '@angular/core'
import { ViewService } from './view.service'
import { MatDialogRef } from '@angular/material';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'view-comp',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  // providers: [ViewService]
})

export class ViewComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<ViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
  }

  ngOnInit() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}