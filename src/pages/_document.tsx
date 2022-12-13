import { getInitColorSchemeScript } from "@mui/joy/styles";
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="application-name" content="Diveholic" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Diveholic" />
          <meta
            name="description"
            content="Dive log built for the modern age"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          {getInitColorSchemeScript({ defaultMode: "system" })}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
