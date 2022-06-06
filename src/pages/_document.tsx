import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head >
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@6  00&family=Poppins:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet"/>
       
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}