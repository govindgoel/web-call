import React from 'react';
import GlobalStyle from '@custom/shared/components/GlobalStyle';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Web Call</title>
        <meta
          name="description"
          content="web call"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
