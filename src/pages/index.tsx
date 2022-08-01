import React from "react";
import DefaultLayout from "common/layouts/Default";
import Home from "modules/Home";
import { User, withPageAuth } from "@supabase/auth-helpers-nextjs";

export const getServerSideProps = withPageAuth({ redirectTo: "/signin" });

export default function HomePage({ user }: { user: User }) {
  return (
    <DefaultLayout>
      <Home user={user} />
    </DefaultLayout>
  );
}
