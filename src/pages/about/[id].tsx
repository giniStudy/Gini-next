import { NextPage, GetServerSideProps } from 'next';
import axios from 'axios';
import nextBase64 from 'next-base64';
import { DetailProps } from './types';
import { marked } from 'marked';
import { Row, Divider, Typography } from 'antd';
import { InfoCard } from '../../components/containers/Card/InfoCard';

const { Title } = Typography;
const AboutDetailPage: NextPage<DetailProps> = (data) => {
  const { gitData, readMeHtml, id } = data;
  const testAry = [
    'sasumpi123/Alphago',
    'giniStudy/Gini-next',
    'giniStudy/backend',
    'giniStudy/G-Backend',
  ];

  const githubContributionPath = `https://ghchart.rshah.org/${id}`;
  return (
    <>
      <Divider>
        <Title>About Me!</Title>
      </Divider>
      <div dangerouslySetInnerHTML={{ __html: readMeHtml }} />
      <Divider>
        <Title>GitHub Repositories</Title>
      </Divider>
      <Row gutter={16}>
        {testAry.map((path) => {
          return <InfoCard repoPath={path} key={path} />;
        })}
      </Row>
      <Divider>
        <Title>Contributions</Title>
      </Divider>
      <img src={githubContributionPath} />
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
    props: { gitData, readMeHtml: readMeHtml, id: id },
  };
};
