import { User, withPageAuth } from "@supabase/auth-helpers-nextjs";
import { NewDiveContextProvider } from "common/context/NewDive";
import DefaultLayout from "common/layouts/Default";
import New from "modules/Dives/New";
import React from "react";

export const getServerSideProps = withPageAuth({ redirectTo: "/signin" });

export default function NewPage({ user }: { user: User }) {
  return (
    <DefaultLayout>
      <NewDiveContextProvider>
        <New user={user} />
      </NewDiveContextProvider>
    </DefaultLayout>
  );
}
