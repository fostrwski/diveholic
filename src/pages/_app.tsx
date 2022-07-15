import { CssVarsProvider } from "@mui/joy/styles";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CssVarsProvider>
      <Component {...pageProps} />
    </CssVarsProvider>
  );
}

export default MyApp;
