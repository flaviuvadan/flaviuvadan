import { Component, OnInit } from '@angular/core';

const MENU_DISPLAY_LIMIT = 500;

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
    return window.innerWidth <= MENU_DISPLAY_LIMIT;
  }
}
