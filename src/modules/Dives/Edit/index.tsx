import { type User } from "@supabase/auth-helpers-react";
import type { Dive } from "common/types";
import { supabase } from "common/utils/supabaseClient";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

import Form from "../components/Form";
import type { FormFields } from "../components/Form/types";
import Header from "./Header";

interface EditProps {
  user: User;
}

const Edit: React.FC<EditProps> = ({ user }) => {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const { handleSubmit } = useFormContext<FormFields>();

  const router = useRouter();
  const { id: diveId } = router.query;

  const onSubmit = async (data: Dive) => {
    const { date, ...rest } = data;
    const timestamp = new Date(date).toISOString();

    const { error } = await supabase
      .from("dives")
      .update({ userId: user.id, date: timestamp, ...rest })
      .eq("id", diveId);

    if (error) return console.error(error);

    setSubmitted(true);

    router.push(`/dives/${diveId}`);
  };

  return (
    <>
      <Header diveId={diveId as string} />

      <Form onSubmit={handleSubmit(onSubmit)} submitted={submitted} />
    </>
  );
};

export default Edit;
