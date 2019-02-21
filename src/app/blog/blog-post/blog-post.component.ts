import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from './interface';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  @Input() blogKey: string;

  selectedBlog: BlogPost;

  constructor() { }

  ngOnInit() {
  }

}
