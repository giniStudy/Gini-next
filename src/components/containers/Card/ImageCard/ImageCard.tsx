import { IProps } from './types';
import { Card as AntdCard } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from '../../Spinner';

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
    setHtmlUrl(html_url);
  };

  useEffect(() => {
    handleCallApi(userName);
  }, []);

  if (loading) return <Spinner />;
  return (
    <AntdCard
      hoverable
      style={{ width: 240 }}
      cover={<img alt={userName} src={url} />}
      onClick={() => {
        window.open(`${htmlUrl}`, '_blank');
      }}
    >
      <Meta title={name} description={email} />
    </AntdCard>
  );
};
