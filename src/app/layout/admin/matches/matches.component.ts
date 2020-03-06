import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
 import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
 import { Observable, of as observableOf, merge } from 'rxjs';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css'],
  
})
export class MatchesComponent implements  AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<DataTableItem>;
  dataSource: MatchesComponent;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id','photo', 'detail','action'];

  ngOnInit() {
    this.dataSource = new MatchesComponent();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  data: DataTableItem[] = EXAMPLE_DATA;
  // paginator: MatPaginator;
  // sort: MatSort;

  

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
      //   case 'name': return compare(a.name, b.name, isAsc);
      //   case 'amount': return compare(+a.amount,+b.amount, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
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
  photo:any
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [ // It s Dummy Table
  {id: 1,photo:'./assets/Images/1.jpg', detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
  {id: 2,photo:'./assets/Images/2.jpg', detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
 
  {id: 3,photo:'./assets/Images/h1.jpg', detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
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
