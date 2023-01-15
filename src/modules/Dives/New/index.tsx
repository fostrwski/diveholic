import type { User } from "@supabase/auth-helpers-nextjs";
import type { Dive } from "common/types";
import { supabase } from "common/utils/supabaseClient";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

import Form from "../components/Form";
import type { FormFields } from "../components/Form/types";
import FormSubmittedModal from "./FormSubmittedModal";
import Header from "./Header";

interface NewProps {
  user: User;
}

const New: React.FC<NewProps> = ({ user }) => {
  const { handleSubmit } = useFormContext<FormFields>();

  const router = useRouter();

  const [submitted, setSubmitted] = useState<boolean>(false);

  const onSubmit = async (data: Dive) => {
    const { date, ...rest } = data;
    const timestamp = new Date(date).toISOString();

    const { error, status } = await supabase
      .from("dives")
      .insert({ userId: user.id, date: timestamp, ...rest });

    if (error) return console.error(error);

    setSubmitted(true);
  };

  return (
    <>
      <Header />

      <Form onSubmit={handleSubmit(onSubmit)} submitted={submitted} />

      <FormSubmittedModal open={submitted} setOpen={setSubmitted} />
    </>
  );
};

export default New;
