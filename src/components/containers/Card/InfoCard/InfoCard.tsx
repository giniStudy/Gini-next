import { IProps } from './types';
import { Card as AntdCard, Col, Typography, Badge } from 'antd';
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
      Authorization: process.env.GITHUB_AUTHORIZATION_TOKEN,
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

  const { html_url, name, description, stargazers_count } = repoInfo;
  if (loading) return <Spinner />;
  return (
    <Col
      span={8}
      style={{ marginBottom: 15 }}
      onClick={() => {
        window.open(`${html_url}`, '_blank');
      }}
    >
      <Badge.Ribbon color="yellow" text={`${stargazers_count} Stars`}>
        <AntdCard
          title={name}
          bordered={true}
          hoverable={true}
          style={{ minHeight: 200, maxHeight: 200 }}
        >
          <Paragraph ellipsis={{ rows: 3 }}>{description}</Paragraph>
        </AntdCard>
      </Badge.Ribbon>
    </Col>
  );
};
