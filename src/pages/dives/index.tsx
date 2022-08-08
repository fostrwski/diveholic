import { User, withPageAuth } from "@supabase/auth-helpers-nextjs";
import DefaultLayout from "common/layouts/Default";
import Dives from "modules/Dives";
import React from "react";

export const getServerSideProps = withPageAuth({ redirectTo: "/signin" });

export default function DivesPage({ user }: { user: User }) {
  return (
    <DefaultLayout>
      <Dives />
    </DefaultLayout>
  );
}
