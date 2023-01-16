import { useUser } from "@supabase/auth-helpers-react";
import { supabase } from "common/utils/supabaseClient";
import React from "react";
import { useFormContext } from "react-hook-form";

import Form from "../components/Form";
import type { FormFields } from "../components/Form/types";
import Header from "./Header";

const Edit: React.FC = () => {
  const onSubmit = (data: any) => console.log(data);
  const { handleSubmit } = useFormContext<FormFields>();

  return (
    <>
      <Header />

      <Form onSubmit={handleSubmit(onSubmit)} submitted={false} />
    </>
  );
};

export default Edit;
