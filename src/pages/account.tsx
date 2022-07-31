import { User, withAuthRequired } from "@supabase/supabase-auth-helpers/nextjs";
import Account from "modules/Account";
import React from "react";

export const getServerSideProps = withAuthRequired({ redirectTo: "/signin" });

export default function AccountPage({ user }: { user: User }) {

  return (
    <Account user={user} />
  );
}
