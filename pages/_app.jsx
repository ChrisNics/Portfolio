import { Roboto } from 'next/font/google';
import './globals.css';

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
      <main className={`${roboto.variable} font-sans`}>
        <AnimatedCursor />
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default MyApp;
