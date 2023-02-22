import { CssBaseline } from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";
import { UserProvider } from "@supabase/auth-helpers-react";
import theme from "common/theme";
import initGA from "common/utils/ga";
import { supabase } from "common/utils/supabaseClient";
import Cookies from "js-cookie";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!Cookies.get("CookieConsent")) return;

    if (!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) return;

    initGA(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
  }, []);

  return (
    <UserProvider supabaseClient={supabase}>
      <CssVarsProvider
        theme={theme}
        defaultMode="system"
        disableTransitionOnChange
      >
        <CssBaseline />
        <Component {...pageProps} />
      </CssVarsProvider>
    </UserProvider>
  );
}
