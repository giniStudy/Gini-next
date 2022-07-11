import type { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { Footer, Sider, Content } from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
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
