import React from "react";
import DefaultLayout from "common/layouts/Default";
import Home from "modules/Home";
import { withAuthRequired } from "@supabase/supabase-auth-helpers/nextjs";

const getServerSideProps = withAuthRequired({ redirectTo: "/signin" })

export default function HomePage() {
  return (
    <DefaultLayout>
      <Home />
    </DefaultLayout>
  );
};
