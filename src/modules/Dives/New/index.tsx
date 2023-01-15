import type { User } from "@supabase/auth-helpers-nextjs";
import type { Dive } from "common/types";
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
  const { handleSubmit } = useFormContext<FormFields>();

  const onSubmit = async (data: Dive) => {
    const {date, ...rest} = data
    const timestamp = new Date(date).toISOString()

    const { error, status } = await supabase
      .from("dives")
      .insert({ userId: user.id, date: timestamp, ...rest });
    console.log(data)
    if (error) return console.error(error);
    if (status === 201) console.log("Created!")
  };

  return (
    <>
      <Header />

      <Form onSubmit={handleSubmit(onSubmit)} />
    </>
  );
};

export default New;
