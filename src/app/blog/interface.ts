export interface BlogNode {
  name: string;
  posted: string;
  children?: BlogNode[];
}

export interface FlatBlogNode {
  expandable: boolean;
  name: string;
  level: number;
}
