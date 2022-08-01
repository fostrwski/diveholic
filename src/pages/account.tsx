import React from "react";
import { User, withPageAuth } from "@supabase/auth-helpers-nextjs"
import Account from "modules/Account";
import DefaultLayout from "common/layouts/Default";

export const getServerSideProps = withPageAuth({ redirectTo: "/signin" });

export default function AccountPage({ user }: { user: User }) {
  return (
    <DefaultLayout>
      <Account user={user} />
    </DefaultLayout>
  )
}
