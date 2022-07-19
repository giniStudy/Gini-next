import axios from 'axios';
import { useEffect, useState } from 'react';
import { IPostListResponse, Post } from '../interfaces/post';

const usePosts = (
  page: any,
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
      if (page && size) {
        try {
          const searchUrl = `/api/post`;
          const param = {
            page: page,
            size: size,
            searchText: searchText,
            tags: tags.join(','),
          };
          const { data } = await axios.get<IPostListResponse>(searchUrl, {
            params: param,
          });
          const { postList: fetchedPostList, totalCount } = data;
          setPosts(fetchedPostList);
          setTotalCount(totalCount);
        } catch (e) {
          setError(e);
        } finally {
          setLoading(false);
        }
      }
    };
    handleGetProductList();
  }, [page, size, searchText, tags]);

  return { posts, totalCount, loading, error, setPosts };
};

export default usePosts;
