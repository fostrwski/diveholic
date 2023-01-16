import {
  supabaseServerClient,
  withPageAuth
} from "@supabase/auth-helpers-nextjs";
import DefaultLayout from "common/layouts/Default";
import type { Dive } from "common/types";
import Dives from "modules/Dives";
import React from "react";

export const getServerSideProps = withPageAuth({
  redirectTo: "/signin",
  async getServerSideProps(ctx) {
    const { data: dives } = await supabaseServerClient(ctx)
      .from<Dive>("dives")
      .select("*")
      .order("date", { ascending: false });
    return { props: { dives } };
  }
});

interface DivesPageProps {
  dives: Array<Dive>;
}

export default function DivesPage({ dives }: DivesPageProps) {
  return (
    <DefaultLayout>
      <Dives data={dives} />
    </DefaultLayout>
  );
}
