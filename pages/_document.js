// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Inter&family=Outfit:wght@600&display=swap'
            rel='stylesheet'
          />
          <meta name='robots' content='noindex,nofollow' />
          <link rel='icon' href='/favicon.ico' />
          <meta name='description' content='Private Portfolio' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
