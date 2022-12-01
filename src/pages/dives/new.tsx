import { User, withPageAuth } from "@supabase/auth-helpers-nextjs";
import { NewDiveContextProvider } from "common/context/NewDive";
import DefaultLayout from "common/layouts/Default";
import { supabase } from "common/utils/supabaseClient";
import { Formik } from "formik";
import New from "modules/Dives/New";
import initialValues from "modules/Dives/components/Form/initialValues";
import generateNewDiveObject from "modules/Dives/utils/generateNewDiveObject";
import React from "react";

export const getServerSideProps = withPageAuth({ redirectTo: "/signin" });

export default function NewPage({ user }: { user: User }) {
  return (
    <DefaultLayout>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
        }}
      >
        <NewDiveContextProvider>
          <New user={user} />
        </NewDiveContextProvider>
      </Formik>
    </DefaultLayout>
  );
}
