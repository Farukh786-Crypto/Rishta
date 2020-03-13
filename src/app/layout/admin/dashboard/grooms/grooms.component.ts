import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { MatTable } from '@angular/material/table';
import { ViewComponent } from '../view/view.component';
import { EditComponent } from '../edit/edit.component';
import { PhotoviewComponent } from '../photoview/photoview.component';

@Component({
  selector: 'app-grooms',
  templateUrl: './grooms.component.html',
  styleUrls: ['./grooms.component.css'],
  providers: []
})
export class GroomsComponent implements AfterViewInit, OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<DataTableItem>;
  dataSource: GroomsComponent;

  displayedColumns = [ 'date','photo', 'name','age','religion','city', 'package','action'];

  constructor(private route: Router, public dialog: MatDialog) { }

  ngOnInit() {

    this.dataSource = new GroomsComponent(this.route, this.dialog);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  data: DataTableItem[] = EXAMPLE_DATA;
  connect(): Observable<DataTableItem[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  disconnect() { }

  private getPagedData(data: DataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }
  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
          case 'name': return compare(a.name, b.name, isAsc);
        case 'age': return compare(+a.age, +b.age, isAsc);
        default: return 0;
      }
    });
  }

  openDialog(params): void {
    console.log(params);
    const dialogRef = this.dialog.open(ViewComponent, {
      width: '800px', height: '520px',
      data: params
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(params): void {
    console.log(params);
    const dialogRef = this.dialog.open(EditComponent, {
      width: '800px', height: '500px',
      data: params
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDialog3(params): void {
    console.log(params);
    const dialogRef = this.dialog.open(PhotoviewComponent, {
      width: '400px', height: '480px',
      data: params
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
export interface DataTableItem {
    date:string;
    name: string,
    age: number;
    religion: string;
    city: string;
     id: number;
     package:string;
     photo:{
             photo1:any;
             photo2:any;
             photo3:any;
     }


}
const EXAMPLE_DATA: DataTableItem[] = [
  { id: 1, date:'23/04/2020',photo: {photo1:'./assets/Images/h1.jpg',photo2:'./assets/Images/h8.jpg',photo3:'./assets/Images/h9.jpg'}, name: 'Sushant', age: 26, religion: 'hindu', city: 'pune' ,package:'golden'},
  { id: 2, date:'23/04/2020', photo: {photo1:'./assets/Images/h2.jpg',photo2:'./assets/Images/h10.jpg',photo3:'./assets/Images/h11.jpg'}, name: 'Rajkumar', age: 25, religion: 'hindu', city: 'pune' ,package:'golden'},
  { id: 3, date:'23/04/2020',photo: {photo1:'./assets/Images/h3.jpg',photo2:'./assets/Images/h14.jpg',photo3:'./assets/Images/h15.jpg'}, name: 'Ram', age: 27, religion: 'hindu', city: 'pune',package:'golden' },
  { id: 4,date:'23/04/2020', photo: {photo1:'./assets/Images/h1.jpg',photo2:'./assets/Images/h8.jpg',photo3:'./assets/Images/h9.jpg'},  name: 'Sushant', age: 23, religion: 'hindu',  city: 'pune',package:'golden' },
  { id: 5,date:'23/04/2020', photo: {photo1:'./assets/Images/h6.jpg',photo2:'./assets/Images/h18.jpg',photo3:'./assets/Images/h20.jpg'}, name: 'Prabhas', age: 24, religion: 'hindu',  city: 'pune',package:'golden' },
  { id: 6,date:'23/04/2020', photo: {photo1:'./assets/Images/h2.jpg',photo2:'./assets/Images/h10.jpg',photo3:'./assets/Images/h11.jpg'},  name: 'Rajkumar', age: 25, religion: 'hindu',  city: 'pune',package:'golden' },
  { id: 7,date:'23/04/2020',photo: {photo1:'./assets/Images/h3.jpg',photo2:'./assets/Images/h14.jpg',photo3:'./assets/Images/h15.jpg'}, name: 'Ram', age: 27, religion: 'hindu', city: 'pune',package:'golden'},
  { id: 8, date:'23/04/2020',photo: {photo1:'./assets/Images/h1.jpg',photo2:'./assets/Images/h8.jpg',photo3:'./assets/Images/h9.jpg'},  name: 'Ram', age: 23, religion: 'hindu',city: 'pune',package:'golden'},
  { id: 9,date:'23/04/2020',photo: {photo1:'./assets/Images/h6.jpg',photo2:'./assets/Images/h18.jpg',photo3:'./assets/Images/h20.jpg'}, name: 'Prabhas', age: 26, religion: 'hindu',  city: 'pune',package:'golden' },
  { id: 10, date:'23/04/2020',photo: {photo1:'./assets/Images/h1.jpg',photo2:'./assets/Images/h8.jpg',photo3:'./assets/Images/h9.jpg'}, name: 'sushant', age: 25, religion: 'hindu', city: 'pune',package:'golden'},


];

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


