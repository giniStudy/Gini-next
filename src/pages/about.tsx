import { NextPage } from 'next';
import { Space } from 'antd';
import ReactMarkDown from 'react-markdown';
import content from '../../resources/contents/test.md';

const AboutPage: NextPage = () => {
  const handle = async () => {};

  handle();

  return (
    <>
      <Space>
        <ReactMarkDown content={content} />
      </Space>
      <Space></Space>
    </>
  );
};

export default AboutPage;
