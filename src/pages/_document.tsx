/* eslint-disable @next/next/no-document-import-in-page */
// I _am_ in _document.js, it's just that I use typescript you dumb linter

import Document, { DocumentContext, Main, Head, NextScript, Html } from "next/document";
import { InitializeColorMode } from "theme-ui";

export default class CoolerDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
		<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
			<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
		</Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}