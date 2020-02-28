import { Directive,Input, OnDestroy, OnInit } from '@angular/core';
import { MatGridList } from '@angular/material';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


export interface GridColumns {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}


@Directive({
  selector: '[appGridCols]'
})
export class GridColsDirective {
  constructor() { }
}
