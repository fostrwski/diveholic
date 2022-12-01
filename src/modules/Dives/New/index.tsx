import type { User } from "@supabase/auth-helpers-nextjs";
import { useNewDiveContext } from "common/context/NewDive";
import { supabase } from "common/utils/supabaseClient";
import React from "react";
import { useFormContext } from "react-hook-form";

import Form from "../components/Form";
import generateNewDiveObject from "../utils/generateNewDiveObject";
import Header from "./Header";

interface NewProps {
  user: User;
}

const New: React.FC<NewProps> = ({ user }) => {
  const { newDive } = useNewDiveContext();
  const { handleSubmit } = useFormContext();
  const onSubmit = (data) => console.log(data);

  const customSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const diveObject = generateNewDiveObject(newDive);

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
