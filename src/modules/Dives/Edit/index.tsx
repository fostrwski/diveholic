import { useUser } from "@supabase/auth-helpers-react";
import type { Dive, DiveFlattened } from "common/types";
import { supabase } from "common/utils/supabaseClient";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import Form from "../components/Form";
import generateDiveFlattenedObject from "../components/Form/utils/generateDiveFlattenedObject";
import Header from "./Header";

const Edit: React.FC = () => {
  const { user } = useUser();
  const router = useRouter();
  const { id: diveId } = router.query;
  const onSubmit = (data) => console.log(data);
  const { handleSubmit } = useFormContext();

  // useEffect(() => {
  //   const getDiveById = async () => {
  //     const { data, error } = await supabase
  //       .from<Dive>("dives")
  //       .select("*")
  //       .match({ id: diveId });

  //     if (error) return console.error(error);

  //     if (data) {
  //       const dive = data[0];
  //     }
  //   };

  //   if (user) getDiveById();
  // }, [user]);

  return (
    <>
      <Header />

      <Form onSubmit={handleSubmit(onSubmit)} />
    </>
  );
};

export default Edit;
