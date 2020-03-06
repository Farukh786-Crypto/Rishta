import { Router } from '@angular/router';
import { MatDialog} from '@angular/material';
import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
 import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
 import { Observable, of as observableOf, merge } from 'rxjs';
import { MatTable  } from '@angular/material/table';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'app-brides',
  templateUrl: './brides.component.html',
  styleUrls: ['./brides.component.css'],
  providers:[]
})
export class BridesComponent implements OnInit,AfterViewInit {

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<DataTableItem>;
  dataSource: BridesComponent;

  displayedColumns = ['id','photo', 'detail','action'];

  constructor( private route: Router,public dialog: MatDialog) { }
  animal: string;
 

  ngOnInit() {
 
 this.dataSource = new BridesComponent(this.route,this.dialog);
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
  disconnect() {}
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
      //   case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
  
  openDialog(): void {
     const dialogRef = this.dialog.open(ViewComponent, {
      width: '800px',height:'600px'
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
   detail: any

}
export interface DataTableItem {
  detail : {
    name:string,
    age:number;
    religion:string;
    mothertongue:string;
    city:string;
    maritalstatus:string;
  };
  id: number;
  photo:any;

  
}
 const EXAMPLE_DATA: DataTableItem[] = [ 
    {id: 1,photo:'./assets/Images/1.jpg', detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
    {id: 2,photo:'./assets/Images/2.jpg', detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},      {id: 3,photo:'./assets/Images/h1.jpg', detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
     {id: 4,photo:'./assets/Images/4.jpg', detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
     {id: 5, photo:'./assets/Images/h2.jpg', detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
     {id: 6, photo:'./assets/Images/5.jpg', detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
     {id: 7, photo:'./assets/Images/h3.jpg', detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
     {id: 8,photo:'./assets/Images/6.jpg',  detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
     {id: 9,photo:'./assets/Images/h5.jpg',  detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
     {id: 10,photo:'./assets/Images/h6.jpg',  detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi ',city:'pune',maritalstatus:'married'}},
     
    
  ];

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


