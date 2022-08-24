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
    // @TODO: handle  empty array
    const { data } = await supabaseServerClient(ctx)
      .from<Dive>("dives")
      .select("*");
    return { props: { data } };
  },
});

export default function DivesPage({ data }: { data: Array<Dive> }) {
  return (
    <DefaultLayout>
      <Dives data={data} />
    </DefaultLayout>
  );
}
