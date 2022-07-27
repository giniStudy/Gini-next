import axios from 'axios';
import { useEffect, useState } from 'react';
import { IPostListResponse, Post } from '../interfaces/post';

const usePosts = (
  page: number,
  size: number,
  searchText: string,
  tags: string[],
) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(undefined);

  useEffect(() => {
    const handleGetProductList = async () => {
      setLoading(true);

      try {
        let searchUrl = `/post?page=${page}&size=${size}`;
        if (searchText !== '') searchUrl += `&searchText=${searchText}`;
        if (tags && tags.length !== 0) searchUrl += `&tags=${tags.join(',')}`;

        const { data } = await axios.get<IPostListResponse>(searchUrl);
        const { list: fetchedPostList, totalCount } = data;
        setPosts(fetchedPostList);
        setTotalCount(totalCount);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    handleGetProductList();
  }, [page, size, searchText, tags]);

  return { posts, totalCount, loading, error, setPosts };
};

export default usePosts;
