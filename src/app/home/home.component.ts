import { Component, OnInit } from '@angular/core';

const ONE_COLUMN_UPPER_LIMIT = 900;
const TWO_COLUMNS_UPPER_LIMIT = 1700;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cols = 3;

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
