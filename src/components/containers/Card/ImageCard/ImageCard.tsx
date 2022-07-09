import { IProps } from './types';
import { Card as AntdCard } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from '../../Spinner';
import { useRouter } from 'next/router';

const { Meta } = AntdCard;
export const ImageCard: React.FC<IProps> = ({ userName }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const router = useRouter();
  const handleCallApi = async (userName: string) => {
    setLoading(true);
    const headers = {
      Authorization: 'secret',
    };
    const { data } = await axios.get(
      `https://api.github.com/users/${userName}`,
      { headers },
    );
    setLoading(false);
    const { avatar_url, name, email } = data;
    setUrl(avatar_url);
    setName(name);
    setEmail(email);
  };

  useEffect(() => {
    handleCallApi(userName);
  }, []);

  if (loading) return <Spinner />;
  return (
    <AntdCard
      hoverable
      style={{ width: 300 }}
      cover={<img alt={name} src={url} />}
      onClick={() => {
        router.push(`/about/${userName}`);
      }}
    >
      <Meta title={name} description={email} />
    </AntdCard>
  );
};
