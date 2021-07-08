import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';

import SongsProvider from '../src/context/SongContext';

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Player from '../src/components/Player';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: black;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Coletivo Monturo</title>
        <link rel="icon" href="/logo.svg" />
        <meta name="title" content="Coletivo monturo" />
        <meta name="description" content="A poesia do lixo" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coletivo-three.vercel.app/" />
        <meta property="og:title" content="Coletivo monturo" />
        <meta property="og:description" content="A poesia do lixo" />
        <meta property="og:image" content="/logo.svg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://coletivo-three.vercel.app/" />
        <meta property="twitter:title" content="Coletivo monturo" />
        <meta property="twitter:description" content="A poesia do lixo" />
        <meta property="twitter:image" content="/logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SongsProvider>
          <Header />
          <Component {...pageProps} />
          <Player />
          <Footer />
        </SongsProvider>
      </ThemeProvider>
    </>
  );
}
