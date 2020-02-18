import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Router } from '@angular/router';
import { ViewService } from '../view/view.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}



@Component({
  selector: 'app-grooms',
  templateUrl: './grooms.component.html',
  styleUrls: ['./grooms.component.css'],
  providers: [DataService, ViewService]
})
export class GroomsComponent implements OnInit {
  myDetail: any

  constructor(private data: DataService, private route: Router, public dialog: MatDialog) { }
  animal: string;
  name: string;


  ngOnInit() {
  this.getGroomsData();
   }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }








  detail: any
  // getAllDetails() {
  //   this.view.getView().subscribe
  //     (
  //       response => { this.detail = response },
  //       error => { this.detail = error }
  //     );

  // }
  public getGroomsData() {

    this.data.getGrooms().subscribe(
      response => {
        this.myDetail = response
      },
      error => { this.myDetail = error }
    )
  }


  //  public view()
  //  {
  //     this.route.navigate(['./view']);

  //  }

}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'viewgrooms.component.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

