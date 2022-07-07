import { IProps } from './types';
import { Card as AntdCard, Divider, Tag } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const { Meta } = AntdCard;
export const ImageCard: React.FC<IProps> = ({ userName }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [htmlUrl, setHtmlUrl] = useState<string>('');
  const handleCallApi = async (userName: string) => {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.github.com/users/${userName}`,
    );
    setLoading(false);
    const { avatar_url, name, html_url, email } = data;
    setUrl(avatar_url);
    setName(name);
    setEmail(email);
    setHtmlUrl(htmlUrl);
  };

  useEffect(() => {
    handleCallApi(userName);
  }, []);

  return (
    <AntdCard
      hoverable
      style={{ width: 240 }}
      cover={<img alt={userName} src={url} />}
      loading={loading}
      onClick={() => {
        window.open(`${htmlUrl}`, '_blank');
      }}
    >
      <Meta title={name} description={email} />
    </AntdCard>
  );
};
