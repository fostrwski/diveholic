import { User, withPageAuth } from "@supabase/auth-helpers-nextjs";
import DefaultLayout from "common/layouts/Default";
import New from "modules/Dives/New";
import React from "react";

export const getServerSideProps = withPageAuth({ redirectTo: "/signin" });

export default function NewPage({ user }: { user: User }) {
  return (
    <DefaultLayout>
      <New user={user} />
    </DefaultLayout>
  );
}
