// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Outfit:wght@600&display=swap'
            rel='stylesheet'
          />
          <meta name='robots' content='noindex,nofollow' />
          <meta name='description' content='Private Portfolio' />
          {/* Favicon */}
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='favicon/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='favicon/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='favicon/favicon-16x16.png'
          />
          <link rel='manifest' href='favicon/site.webmanifest' />
          <meta
            name='msapplication-config'
            content='favicon/browserconfig.xml'
          />
          <meta name='msapplication-TileColor' content='#140C2C' />
          <meta name='theme-color' content='#140C2C' />
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
