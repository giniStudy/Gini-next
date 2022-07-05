import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const HomePage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/post?page=1');
  }, []);

  return <></>;
};

export default HomePage;
