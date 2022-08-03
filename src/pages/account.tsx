import { User, withPageAuth } from "@supabase/auth-helpers-nextjs";
import DefaultLayout from "common/layouts/Default";
import Account from "modules/Account";
import React from "react";

export const getServerSideProps = withPageAuth({ redirectTo: "/signin" });

export default function AccountPage({ user }: { user: User }) {
  return (
    <DefaultLayout>
      <Account user={user} />
    </DefaultLayout>
  );
}
