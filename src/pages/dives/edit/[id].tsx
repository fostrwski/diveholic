import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import { NewDiveContextProvider } from "common/context/NewDive";
import DefaultLayout from "common/layouts/Default";
import Edit from "modules/Dives/Edit";
import React from "react";

export const getServerSideProps = withPageAuth({ redirectTo: "/signin" });

export default function EditPage() {
  return (
    <DefaultLayout>
      <NewDiveContextProvider>
        <Edit />
      </NewDiveContextProvider>
    </DefaultLayout>
  );
}
