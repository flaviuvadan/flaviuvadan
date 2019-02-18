import { Component, OnInit } from '@angular/core';

import { Constants } from '../constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cols = Constants.COLUMNS_DEFAULT;

  constructor() {
  }

  ngOnInit() {
    this.cols = this.getBreakpoint();
  }

  onResize(event: any): void {
    this.cols = this.getBreakpoint();
  }

  private getBreakpoint(): number {
    const width = window.innerWidth;
    if (width < Constants.ONE_COLUMN_UPPER) {
      return 1;
    } else if (width < Constants.TWO_COLUMNS_UPPER) {
      return 2;
    } else {
      return 3;
    }
  }
}
