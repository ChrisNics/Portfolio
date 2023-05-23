import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html className="dark scroll-smooth">
      <Head />
      <body className="debug-screens scroll-smooth">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
