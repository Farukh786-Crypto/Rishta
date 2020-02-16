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
  displayedColumns = ['id', 'name','amount'];

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
        case 'name': return compare(a.name, b.name, isAsc);
        case 'amount': return compare(+a.amount,+b.amount, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}
export interface DataTableItem {
  name: string;
  id: number;
  amount:number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [ // It s Dummy Table
  {id: 1, name: 'Hydrogen',amount:20},
  {id: 2, name: 'Helium',amount:30},
  {id: 3, name: 'Lithium',amount:40},
  {id: 4, name: 'Beryllium',amount:50},
  {id: 5, name: 'Boron',amount:60},
  {id: 6, name: 'Carbon',amount:70},
  {id: 7, name: 'Nitrogen',amount:80},
  {id: 8, name: 'Hydrogen',amount:20},
  {id: 9, name: 'Helium',amount:30},
  {id: 10, name: 'Lithium',amount:40},
  {id: 11, name: 'Beryllium',amount:50},
  {id: 12, name: 'Boron',amount:60},
  {id: 13, name: 'Carbon',amount:70},
  {id: 14, name: 'Nitrogen',amount:80},
];
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}




