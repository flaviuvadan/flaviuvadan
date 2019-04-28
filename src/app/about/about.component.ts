import { Component, OnInit } from '@angular/core';

import { Constants } from '../constants';

@Component({
  selector: 'app-home',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

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
