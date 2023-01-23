import {
  type User,
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
import { yupResolver } from "@hookform/resolvers/yup";
import diveSchema from "modules/Dives/components/Form/diveSchema";

export const getServerSideProps = withPageAuth({
  redirectTo: "/signin",
  async getServerSideProps(ctx) {
    const { data, error } = await supabaseServerClient(ctx)
      .from<Dive>("dives")
      .select("*")
      .match({ id: ctx.params?.id });

    if (error) console.error(error);

    if (data == null) return { props: { dive: null } };

    const initialValues = { ...defaultValues, ...data[0] };

    return { props: { initialValues } };
  }
});

interface EditPageProps {
  user: User;
  initialValues: Dive;
}

export default function EditPage({ user, initialValues }: EditPageProps) {
  const methods = useForm<FormFields>({ defaultValues: initialValues, resolver: yupResolver(diveSchema) });
  return (
    <DefaultLayout>
      <FormProvider {...methods}>
        <Edit user={user}/>
      </FormProvider>
    </DefaultLayout>
  );
}
