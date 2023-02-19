import { type User, withPageAuth } from "@supabase/auth-helpers-nextjs";
import DefaultLayout from "common/layouts/Default";
import Home from "modules/Home";
import React from "react";

export const getServerSideProps = withPageAuth({
  redirectTo: "/signin"
});

export default function HomePage() {
  return (
    <DefaultLayout>
      <Home />
    </DefaultLayout>
  );
}
