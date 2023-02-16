import {
  type User,
  supabaseServerClient,
  withPageAuth
} from "@supabase/auth-helpers-nextjs";
import DefaultLayout from "common/layouts/Default";
import type { Dive } from "common/types";
import Home from "modules/Home";
import React from "react";

async function getDives(ctx: any) {
  const { data: dives } = await supabaseServerClient(ctx)
    .from("dives")
    .select("*")
    .order("date", { ascending: false });

  return dives;
}

export const getServerSideProps = withPageAuth({
  redirectTo: "/signin",
  async getServerSideProps(ctx) {
    const dives = await getDives(ctx);
    return { props: { dives } };
  }
});

interface HomePageProps {
  user: User;
  dives: Array<Dive>;
}

export default function HomePage({ user, dives }: HomePageProps) {
  return (
    <DefaultLayout>
      <Home user={user} dives={dives} />
    </DefaultLayout>
  );
}
