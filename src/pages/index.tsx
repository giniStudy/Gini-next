import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const HomePage: NextPage = () => {
  const router = useRouter();
  router.push('/post?page=1&size=10');
  return <></>;
};

export default HomePage;
