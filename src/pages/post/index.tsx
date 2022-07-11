import { NextPage } from 'next';
import axios from 'axios';
import { PostCard } from '../../components/containers/Card/PostCard';
import { Spinner } from '../../components/containers/Spinner';
import useIntersectionObserver from '../../hook/useIntersectionObserver';
import { useState, useEffect } from 'react';
import { IPostListResponse, Post } from '../../interfaces/post';
import { Empty } from 'antd';
import { SearchInput } from '../../components/containers/SearchInput';

const PAGE_SIZE = 10;

const PostPage: NextPage = () => {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(1);
  const [error, setError] = useState<any>(undefined);
  const [searchText, setSearchText] = useState<string>('');

  const onIntersect: IntersectionObserverCallback = async (
    [entry],
    observer,
  ) => {
    if (entry.isIntersecting && !loading) {
      observer.unobserve(entry.target);
      if (!loading && total > page * PAGE_SIZE) setPage(page + 1);
      observer.observe(entry.target);
    }
  };

  const handleCallApi = async () => {
    setLoading(true);

    try {
      const searchUrl =
        searchText === ''
          ? `/api/post?page=${page}&size=${PAGE_SIZE}`
          : `/api/post?page=${page}&size=${PAGE_SIZE}&searchText=${encodeURIComponent(
              searchText,
            )}`;
      const { data } = await axios.get<IPostListResponse>(searchUrl);
      const { postList: fetchedPostList, totalCount } = data;

      setTotal(totalCount);
      await setPostList(postList.concat(fetchedPostList));
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleCallApi();
  }, [page, searchText]);

  const { setTarget } = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
    onIntersect,
  });

  const handleOnSearch = (value: string) => {
    setPostList([]);
    setPage(1);
    setSearchText(value);
  };

  return (
    <>
      <div style={{ marginBottom: 30 }}>
        <SearchInput onSearch={handleOnSearch} loading={loading} />
      </div>

      {(!postList || total === 0) && <Empty />}
      {!error &&
        postList &&
        postList.map((post: any, index: number) => {
          return <PostCard post={post} key={index} />;
        })}

      <div ref={setTarget}>{loading && <Spinner />}</div>
    </>
  );
};
export default PostPage;
