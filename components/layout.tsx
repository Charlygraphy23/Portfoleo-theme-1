import { init } from "@emailjs/browser";
import Head from "next/head";
import Script from "next/script";
import React from "react";
import ContactMe from "./contact";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  init("JQrVHKPVX62Zpyqu0");

  return (
    <>
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
      <main>
        <Script
          id="bootstrap-cdn"
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        />
        {children}

        {/* // Modal */}
        <ContactMe />
      </main>
    </>
  );
};

export default Layout;
