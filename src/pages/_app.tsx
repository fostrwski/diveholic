import { CssBaseline } from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";
import { UserProvider } from "@supabase/auth-helpers-react";
import CookieConsent from "common/components/CookieConsent";
import theme from "common/theme";
import initGA from "common/utils/ga";
import { supabase } from "common/utils/supabaseClient";
import Cookies from "js-cookie";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showCookieConsent, setShowCookieConsent] = useState<boolean>(false);
  useEffect(() => {
    if (!Cookies.get("CookieConsent")) return setShowCookieConsent(true);

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
        {showCookieConsent && <CookieConsent />}
        <Component {...pageProps} />
      </CssVarsProvider>
    </UserProvider>
  );
}
