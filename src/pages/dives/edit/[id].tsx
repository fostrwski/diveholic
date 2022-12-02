import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import DefaultLayout from "common/layouts/Default";
import Edit from "modules/Dives/Edit";
import defaultValues from "modules/Dives/components/Form/defaultValues";
import { FormFields } from "modules/Dives/components/Form/types";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

export const getServerSideProps = withPageAuth({ redirectTo: "/signin" });

export default function EditPage() {
  const methods = useForm<FormFields>({ defaultValues });
  return (
    <DefaultLayout>
      <FormProvider {...methods}>
        <Edit />
      </FormProvider>
    </DefaultLayout>
  );
}
