import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        {/* <meta property="Gini" content="Gini blog" /> */}
        <Head title="Gini" />
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
