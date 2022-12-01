import { type User, withPageAuth } from "@supabase/auth-helpers-nextjs";
import { NewDiveContextProvider } from "common/context/NewDive";
import DefaultLayout from "common/layouts/Default";
import New from "modules/Dives/New";
import defaultValues from "modules/Dives/components/Form/defaultValues";
import type { FormFields } from "modules/Dives/components/Form/types";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

export const getServerSideProps = withPageAuth({ redirectTo: "/signin" });

export default function NewPage({ user }: { user: User }) {
  const methods = useForm<FormFields>({ defaultValues: defaultValues });

  return (
    <DefaultLayout>
      <FormProvider {...methods}>
        <NewDiveContextProvider>
          <New user={user} />
        </NewDiveContextProvider>
      </FormProvider>
    </DefaultLayout>
  );
}
