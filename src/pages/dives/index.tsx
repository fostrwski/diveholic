import {
  supabaseServerClient,
  withPageAuth,
} from "@supabase/auth-helpers-nextjs";
import DefaultLayout from "common/layouts/Default";
import Dives from "modules/Dives";
import React from "react";

export const getServerSideProps = withPageAuth({
  redirectTo: "/signin",
  async getServerSideProps(ctx) {
    const { data } = await supabaseServerClient(ctx).from("dives").select("*");
    return { props: { data } };
  },
});

export default function DivesPage({ data }: { data: any }) {
  return (
    <DefaultLayout>
      <Dives data={data} />
    </DefaultLayout>
  );
}
