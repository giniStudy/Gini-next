import { NextPage, GetServerSideProps } from 'next';
import { DetailProps } from './types';

const PostDetailPage: NextPage<DetailProps> = (data) => {
  return <></>;
};

export default PostDetailPage;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.query;

  return {
    props: {},
  };
};
