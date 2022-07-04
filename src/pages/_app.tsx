import type { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { Footer, Sider, Content } from '../components/layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/') {
      router.push('/post?page=1&size=10');
    }
  }, []);
  return (
    <>
      <Layout hasSider>
        <Sider />
        <Layout style={{ marginLeft: 200 }}>
          <Content>
            <Component {...pageProps} />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </>
  );
}

export default MyApp;

/**
 * 페이지 전환시 레이아웃 유지
 * 페이지 전환시 상태값 유지
 * componentDisCatch를 이용 커스텀 에러 핸들링
 * 추가적인 데이터를 페이지로 주입
 * 글로벌 css 설정
 */
