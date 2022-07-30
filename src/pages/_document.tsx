import Document, { Head, Html, Main, NextScript } from "next/document";
import { getInitColorSchemeScript } from "@mui/joy/styles";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          {getInitColorSchemeScript({ enableSystem: true })}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
