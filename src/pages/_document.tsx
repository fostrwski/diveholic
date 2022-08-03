import { getInitColorSchemeScript } from "@mui/joy/styles";
import Document, { Head, Html, Main, NextScript } from "next/document";

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
