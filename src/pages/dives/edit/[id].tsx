import {
  supabaseServerClient,
  withPageAuth
} from "@supabase/auth-helpers-nextjs";
import DefaultLayout from "common/layouts/Default";
import type { Dive } from "common/types";
import Edit from "modules/Dives/Edit";
import defaultValues from "modules/Dives/components/Form/defaultValues";
import { FormFields } from "modules/Dives/components/Form/types";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

export const getServerSideProps = withPageAuth({
  redirectTo: "/signin",
  async getServerSideProps(ctx) {
    const { data, error } = await supabaseServerClient(ctx)
      .from<Dive>("dives")
      .select("*")
      .match({ id: ctx.params?.id });

    if (error) console.error(error);

    if (data == null) return { props: { dive: null } };

    const initialValues = {...defaultValues, ...data[0]}

    return { props: { initialValues } };
  }
});

interface EditPageProps {
  initialValues: Dive;
}

export default function EditPage({ initialValues }: EditPageProps) {
  const methods = useForm<FormFields>({ defaultValues: initialValues });
  return (
    <DefaultLayout>
      <FormProvider {...methods}>
        <Edit />
      </FormProvider>
    </DefaultLayout>
  );
}
