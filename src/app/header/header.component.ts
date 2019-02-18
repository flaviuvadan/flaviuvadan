import { Component, OnInit } from '@angular/core';

import { Constants } from '../constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  displayMenu = false;

  constructor() {
  }

  ngOnInit() {
    this.displayMenu = this.getDisplayMenu();
  }

  onResize(event: any): void {
    this.displayMenu = this.getDisplayMenu();
  }

  private getDisplayMenu(): boolean {
    return window.innerWidth <= Constants.HEADER_MENU_DISPLAY_LIMIT;
  }
}
