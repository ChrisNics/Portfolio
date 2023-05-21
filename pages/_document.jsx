import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html className="dark">
      <Head />
      <body className="debug-screens">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
