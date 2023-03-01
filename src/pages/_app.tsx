import { CssBaseline } from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";
import { UserProvider } from "@supabase/auth-helpers-react";
import theme from "common/theme";
import initGA from "common/utils/ga";
import { supabase } from "common/utils/supabaseClient";
import Cookies from "js-cookie";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useEffect } from "react";

import SEO from "../../next-seo.config";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!Cookies.get("Analytics") || Cookies.get("Analytics") === "declined")
      return;

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
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </CssVarsProvider>
    </UserProvider>
  );
}
