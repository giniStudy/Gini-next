import { Post } from '../../interfaces/post';

export interface DetailProps {
  post: Post;
}

export interface PostListScrollInfo {
  postListScrollY: number;
  searchText: string;
}
