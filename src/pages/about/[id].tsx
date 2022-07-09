import { NextPage, GetServerSideProps } from 'next';
import axios from 'axios';
import nextBase64 from 'next-base64';
import { IProps as DetailProps } from './types';
import { marked } from 'marked';

const AboutDetailPage: NextPage<DetailProps> = (data) => {
  const { gitData, readMe } = data;

  const content = nextBase64.decode(readMe.content);
  const result = marked(content);

  return <div dangerouslySetInnerHTML={{ __html: result }} />;
};
export default AboutDetailPage;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.query;

  const headers = { Authorization: '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' };
  const { data: gitData } = await axios.get(
    `https://api.github.com/users/${id}`,
    { headers },
  );
  const { data: readMe } = await axios.get(
    `https://api.github.com/repos/${id}/${id}/readme`,
    { headers },
  );
  return {
    props: { gitData, readMe },
  };
};
