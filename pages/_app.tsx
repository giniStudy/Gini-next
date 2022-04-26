import '../src/styles/globals.css';
import type { AppProps } from 'next/app';
import Top from '../src/components/Top';
import { Html } from 'next/document';
import Head from 'next/head';
import Footer from '../src/components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <meta property="Gini" content="Gini blog" />
        <title>Gini</title>
      </Head>
      <Top />
      <div className="mainTap">
        <Component {...pageProps} />
      </div>
      <Footer />
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
