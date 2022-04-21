import Document, { Html, Head, Main, NextScript } from "next/document";
    export default class CustomDocument extends Document {
      render() {
        return (
          <Html>
            <Head>
              <link
                  href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
                  rel="stylesheet"
                />
              <meta property="Gini" content="Gini blog" />
              <title>Gini</title>
            </Head>
            <body>
              <Main />
            </body>
            <NextScript />
          </Html>
        );
      }
    }