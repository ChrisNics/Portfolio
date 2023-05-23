import { Roboto } from 'next/font/google';
import './globals.css';
import { MantineProvider } from '@mantine/core';

import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <main className={`${roboto.variable} font-sans`}>
          <AnimatedCursor />
          <Component {...pageProps} />
        </main>
      </MantineProvider>
    </>
  );
};

export default MyApp;
