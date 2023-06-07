import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html className="dark scroll-smooth">
      <Head />
      <body
        className={`${
          process.env.NODE_ENV === 'development' ? 'debug-screens' : ''
        } scroll-smooth`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
