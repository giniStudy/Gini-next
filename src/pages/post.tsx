import { NextPage, GetServerSideProps } from 'next';
import axios from 'axios';
import { Card } from '../components/containers/Card';
import { useState } from 'react';

const Post: NextPage = (data: any) => {
  const [boardList, setBoardList] = useState(data.data);

  return (
    <>
      {boardList &&
        boardList.map((board: any) => {
          return <Card board={board} key={board.id} />;
        })}
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
