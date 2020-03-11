import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="description" content="" />
          <meta name="author" content="" />
          <link
            href="https://fonts.googleapis.com/css?family=Inter:400,600,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>    
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
