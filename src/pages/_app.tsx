import { CssBaseline } from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";
import { UserProvider } from "@supabase/auth-helpers-react";
import CookieConsent from "common/components/CookieConsent";
import theme from "common/theme";
import initGA from "common/utils/ga";
import { supabase } from "common/utils/supabaseClient";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  const handleAccept = () => {
    if (!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS)
      return console.error("Google analytics id not specified");

    initGA(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
  };

  return (
    <UserProvider supabaseClient={supabase}>
      <CssVarsProvider
        theme={theme}
        defaultMode="system"
        disableTransitionOnChange
      >
        <CssBaseline />
        <CookieConsent handleAccept={handleAccept} />
        <Component {...pageProps} />
      </CssVarsProvider>
    </UserProvider>
  );
}
