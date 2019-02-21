import { Component, OnInit } from '@angular/core';
import { BlogNode, FlatBlogNode } from './interface';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material';

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

  treeControl: FlatTreeControl<FlatBlogNode>;
  treeFlattener: MatTreeFlattener<any, any>;
  dataSource: MatTreeFlatDataSource<any, any>;

  private transformer = (node: BlogNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  hasChild = (_: number, node: FlatBlogNode) => node.expandable;

  constructor() {
    this.treeControl = new FlatTreeControl<FlatBlogNode>(
      node => node.level, node => node.expandable);

    this.treeFlattener = new MatTreeFlattener(
      this.transformer, node => node.level, node => node.expandable, node => node.children);

    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    this.dataSource.data = this.TREE_DATA;
  }

  ngOnInit() {
  }
}
