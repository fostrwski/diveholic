import {
  supabaseServerClient,
  withPageAuth,
} from "@supabase/auth-helpers-nextjs";
import DefaultLayout from "common/layouts/Default";
import { Dive } from "common/types";
import Dives from "modules/Dives";
import React from "react";

export const getServerSideProps = withPageAuth({
  redirectTo: "/signin",
  async getServerSideProps(ctx) {
    const { data } = await supabaseServerClient(ctx)
      .from<Dive>("dives")
      .select("*")
      .order("date", { ascending: false });
    return { props: { data } };
  },
});

interface DivesPageProps {
  data: Array<Dive>;
}

export default function DivesPage({ data }: DivesPageProps) {
  return (
    <DefaultLayout>
      <Dives data={data} />
    </DefaultLayout>
  );
}
