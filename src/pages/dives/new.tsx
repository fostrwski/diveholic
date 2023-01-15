import { yupResolver } from "@hookform/resolvers/yup";
import { type User, withPageAuth } from "@supabase/auth-helpers-nextjs";
import DefaultLayout from "common/layouts/Default";
import New from "modules/Dives/New";
import defaultValues from "modules/Dives/components/Form/defaultValues";
import type { FormFields } from "modules/Dives/components/Form/types";
import diveSchema from "modules/Dives/components/Form/utils/diveSchema";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

export const getServerSideProps = withPageAuth({ redirectTo: "/signin" });

export default function NewPage({ user }: { user: User }) {
  const methods = useForm<FormFields>({
    defaultValues,
    resolver: yupResolver(diveSchema)
  });

  return (
    <DefaultLayout>
      <FormProvider {...methods}>
        <New user={user} />
      </FormProvider>
    </DefaultLayout>
  );
}
