export interface IPostListResponse {
  totalCount: number;
  list: Post[];
}

export interface Post {
  id: string;
  title: string;
  content: string;
  tag: string[];
}

export interface DetailProps {
  post: Post;
}
