export interface IPostListResponse {
  totalCount: number;
  postList: Post[];
}

export interface Post {
  id: string;
  title: string;
  content: string;
}
