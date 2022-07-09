import { IProps } from './types';
import { Card as AntdCard, Col, Typography } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from '../../Spinner';

const { Paragraph } = Typography;

export const InfoCard: React.FC<IProps> = ({ repoPath }) => {
  const [repoInfo, setRepoInfo] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleGetRepoData = async (path: string) => {
    setLoading(true);
    const headers4github = {
      Authorization: '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',
    };
    const { data } = await axios.get(`https://api.github.com/repos/${path}`, {
      headers: headers4github,
    });

    setRepoInfo(data);
    setLoading(false);
    return data;
  };
  useEffect(() => {
    handleGetRepoData(repoPath);
  }, []);

  const { html_url, name, description } = repoInfo;
  if (loading) return <Spinner />;
  return (
    <Col span={8} style={{ marginBottom: 15 }}>
      <AntdCard
        title={name}
        bordered={true}
        onClick={() => {
          window.open(`${html_url}`, '_blank');
        }}
        hoverable={true}
        style={{ minHeight: 200, maxHeight: 200 }}
      >
        <Paragraph ellipsis={false}>
          {description}test text
          <br />
          test text
          <br />
          test text
          <br />
          test text
          <br />
          test text
          <br />
          test text
          <br />
          test text
          <br />
          test text
          <br />
          test text
          <br />
          test text
          <br />
          test text
          <br />
          test text
          <br />
          test text
          <br />
          test text
          <br />
          test text
          <br />
          test text
          <br />
          test text
          <br />
        </Paragraph>
      </AntdCard>
    </Col>
  );
};
