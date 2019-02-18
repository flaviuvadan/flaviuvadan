import { Component, OnInit } from '@angular/core';

import {
  ONE_COLUMN_UPPER_LIMIT,
  TWO_COLUMNS_UPPER_LIMIT,
  COLUMNS_DEFAULT
} from '../constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cols = COLUMNS_DEFAULT;

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
    if (width < ONE_COLUMN_UPPER_LIMIT) {
      return 1;
    } else if (width < TWO_COLUMNS_UPPER_LIMIT) {
      return 2;
    } else {
      return 3;
    }
  }
}
