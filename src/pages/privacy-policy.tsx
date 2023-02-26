import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import DefaultLayout from "common/layouts/Default";
import PrivacyPolicy from "modules/PrivacyPolicy";
import React from "react";

export const getServerSideProps = withPageAuth({ redirectTo: "/signin" });

export default function PrivacyPolicyPage() {
  return (
    <DefaultLayout>
      <PrivacyPolicy />
    </DefaultLayout>
  );
}
