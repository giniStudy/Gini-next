import { NextPage, GetServerSideProps } from 'next';
import axios from 'axios';
import nextBase64 from 'next-base64';
import { IProps as DetailProps } from './types';
import { marked } from 'marked';
import { Row } from 'antd';
import { InfoCard } from '../../components/containers/Card/InfoCard';

const AboutDetailPage: NextPage<DetailProps> = (data) => {
  const { gitData, readMeHtml } = data;
  const testAry = [
    'sasumpi123/Alphago',
    'giniStudy/Gini-next',
    'giniStudy/backend',
    'giniStudy/G-Backend',
  ];

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: readMeHtml }} />
      <Row gutter={16}>
        {testAry.map((path) => {
          return <InfoCard repoPath={path} key={path} />;
        })}
      </Row>
    </>
  );
};
export default AboutDetailPage;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.query;

  const headers4github = {
    Authorization: process.env.GITHUB_AUTHORIZATION_TOKEN,
  };

  const { data: gitData } = await axios.get(
    `https://api.github.com/users/${id}`,
    { headers: headers4github },
  );
  const { data: readMe } = await axios.get(
    `https://api.github.com/repos/${id}/${id}/readme`,
    { headers: headers4github },
  );

  const readMeHtml = marked(nextBase64.decode(readMe.content));

  return {
    props: { gitData, readMeHtml: readMeHtml },
  };
};
