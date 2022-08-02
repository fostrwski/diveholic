import { CssVarsProvider } from "@mui/joy/styles";
import { UserProvider } from "@supabase/auth-helpers-react";
import theme from "common/theme";
import { supabase } from "common/utils/supabaseClient";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider supabaseClient={supabase}>
      <CssVarsProvider
        theme={theme}
        disableTransitionOnChange
      >
        <Component {...pageProps} />
      </CssVarsProvider>
    </UserProvider>
  );
}
