import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

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
