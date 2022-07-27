import type { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { Footer, Content, Header } from '../components/layout';
import axios from 'axios';

axios.defaults.baseURL = process.env.API_BASE_URL;
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Header />
        <Content>
          <Component {...pageProps} />
        </Content>
        <Footer />
      </Layout>
    </>
  );
}

export default MyApp;
