import type { User } from "@supabase/auth-helpers-nextjs";
import { supabase } from "common/utils/supabaseClient";
import React from "react";
import { useFormContext } from "react-hook-form";

import Form from "../components/Form";
import type { FormFields } from "../components/Form/types";
import Header from "./Header";

interface NewProps {
  user: User;
}

const New: React.FC<NewProps> = ({ user }) => {
  const { handleSubmit, getValues } = useFormContext<FormFields>();
  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data, null, 2));
  };

  const unusedOnSubmit = async (data: any) => {
    const { error } = await supabase
      .from("dives")
      .insert({ user_id: user.id, ...data });
    if (error) console.error(error);
  };

  return (
    <>
      <Header />

      <Form onSubmit={handleSubmit(onSubmit)} />
    </>
  );
};

export default New;
