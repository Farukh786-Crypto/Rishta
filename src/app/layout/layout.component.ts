import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'layout-comp',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']

})

export class LayoutComponent {
  constructor(private router: Router) { }

  public SignOut() {
    sessionStorage.clear();
    this.router.navigate(['./login']);
  }
}

