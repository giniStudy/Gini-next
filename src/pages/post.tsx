import { NextPage, GetServerSideProps } from 'next';
import axios from 'axios';
import { Card } from '../components/containers/Card';
import useIntersectionObserver from '../hook/useIntersectionObserver';
import { useState, useEffect } from 'react';

const Post: NextPage = (data: any) => {
  const [boardList, setBoardList] = useState(data.data.boardList);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(data.data.totalCount);
  const [error, setError] = useState<any>(undefined);

  const onIntersect: IntersectionObserverCallback = async (
    [entry],
    observer,
  ) => {
    if (entry.isIntersecting && !loading) {
      observer.unobserve(entry.target);
      if (total > page * 10) setPage(page + 1);
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    const handleCallApi = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`/api/post?page=${page}&size=${10}`);
        const { boardList: fetchedBoardList, totalCount } = data;
        setTotal(totalCount);

        setBoardList(boardList.concat(fetchedBoardList));
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    handleCallApi();
  }, [page]);

  const { setTarget } = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
    onIntersect,
  });

  return (
    <>
      <div>
        {boardList.map((board: any, index: number) => {
          return <Card board={board} key={index} />;
        })}
      </div>

      <div ref={setTarget}>{loading && <div>Loading...</div>}</div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { page, size } = query;
  const res = await axios.get(
    `http://localhost:3000/api/post?page=${page}&size=${size}`,
  );
  const data = res.data;

  return { props: { data } };
};
export default Post;
