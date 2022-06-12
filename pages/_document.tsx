import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'
import React from 'react'

const MyDocument = () => {
    return (
        <Html lang='en'>
            <Head>
                {/* Responsive meta tag */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Bootstrap */}
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossOrigin="anonymous"
                />

                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
                />
            </Head>
            <body>
                <Main />
                <NextScript >
                    <Script
                        id="bootstrap-cdn"
                        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                    />
                </NextScript>
            </body>
        </Html>
    )
}

export default MyDocument