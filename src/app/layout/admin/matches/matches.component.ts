import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
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
  displayedColumns = ['id', 'detail','action'];

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
  //amount:number;
 
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [ // It s Dummy Table
  {id: 1, detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
  {id: 2, detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
 
  {id: 3, detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
   {id: 4, detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
   {id: 5, detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
   {id: 6, detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
   {id: 7, detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
   {id: 8, detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
   {id: 9, detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
   {id: 10, detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
   {id: 11, detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
   {id: 12, detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
   {id: 13, detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
   {id: 14, detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
   {id: 15, detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
   {id: 16, detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
   {id: 17, detail:{name:'Sastura',age:26,religion:'hindu',mothertongue:'marathi',city:'pune',maritalstatus:'married'}},
  
  
];
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}




