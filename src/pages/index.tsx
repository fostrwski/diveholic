import {
  User,
  supabaseServerClient,
  withPageAuth,
} from "@supabase/auth-helpers-nextjs";
import DefaultLayout from "common/layouts/Default";
import Home from "modules/Home";
import React from "react";

export const getServerSideProps = withPageAuth({
  redirectTo: "/signin",
  async getServerSideProps(ctx) {
    const { data } = await supabaseServerClient(ctx).from("dives").select("*");
    return { props: { dives: data } };
  },
});

interface HomePageProps {
  user: User;
  dives: any;
}

export default function HomePage({ user, dives }: HomePageProps) {
  return (
    <DefaultLayout>
      <Home user={user} dives={dives} />
    </DefaultLayout>
  );
}
