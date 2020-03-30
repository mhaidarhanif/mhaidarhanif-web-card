import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            as='font'
            href='https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap'
            rel='stylesheet'
          ></link>
          <link
            rel='preload'
            as='font'
            href='https://fonts.googleapis.com/css?family=Lato&display=swap'
            rel='stylesheet'
          ></link>
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
