import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  githubUrl = 'https://github.com/flaviuvadan';
  linkedInUrl = 'https://www.linkedin.com/in/flaviuvadan/';
  twitterUrl = 'https://twitter.com/flaviuvadan/';

  constructor() {
  }

  ngOnInit() {
  }

}
