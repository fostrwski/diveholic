import type { User } from "@supabase/auth-helpers-nextjs";
import { supabase } from "common/utils/supabaseClient";
import React from "react";
import { useFormContext } from "react-hook-form";

import Form from "../components/Form";
import generateNewDiveObject from "../components/Form/utils/generateNewDiveObject";
import Header from "./Header";

interface NewProps {
  user: User;
}

const New: React.FC<NewProps> = ({ user }) => {
  const { handleSubmit, getValues } = useFormContext();
  const onSubmit = (data: any) => console.log(data);

  // @ts-ignore
  const unusedOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // @ts-ignore
    const diveObject = generateNewDiveObject(getValues());

    const { error } = await supabase
      .from("dives")
      .insert({ user_id: user.id, ...diveObject });
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
