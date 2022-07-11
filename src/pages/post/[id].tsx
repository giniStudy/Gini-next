import { NextPage, GetServerSideProps } from 'next';
import { Typography } from 'antd';
import { DetailProps } from './types';
import postList from '../api/data.json';

const { Title } = Typography;
const PostDetailPage: NextPage<DetailProps> = (data) => {
  const { post } = data;
  const { title } = post;
  return (
    <>
      <Title>{title}</Title>
    </>
  );
};

export default PostDetailPage;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.query;

  return {
    props: { post: postList.filter((e) => e.id === id)[0] },
  };
};
