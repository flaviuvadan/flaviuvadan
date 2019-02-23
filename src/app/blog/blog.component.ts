import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material';
import { BlogNode, FlatBlogNode } from './interface';
import { Constants } from '../constants';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  TREE_DATA: BlogNode[] = [
    {
      name: '2019',
      posted: '',
      children: [
        {
          name: 'Yet Another Personal Blog',
          posted: '02/19.0',
        }
      ],
    }
  ];

  mobileView: boolean;
  treeControl: FlatTreeControl<FlatBlogNode>;
  treeFlattener: MatTreeFlattener<any, any>;
  dataSource: MatTreeFlatDataSource<any, any>;

  constructor() {
    this.mobileView = false;
    this.treeControl = new FlatTreeControl<FlatBlogNode>(
      node => node.level, node => node.expandable);

    this.treeFlattener = new MatTreeFlattener(
      this.transformer, node => node.level, node => node.expandable, node => node.children);

    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    this.dataSource.data = this.TREE_DATA;
  }

  transformer(node: BlogNode, level: number): FlatBlogNode {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  hasChild(_: number, node: FlatBlogNode) {
    return node.expandable;
  }

  ngOnInit() {
    this.mobileView = this.isMobileView();
  }

  onResize(event: any) {
    this.mobileView = this.isMobileView();
  }

  isMobileView(): boolean {
    return window.innerWidth <= Constants.BLOG_MOBILE_VIEW;
  }
}
