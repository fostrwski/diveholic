import type { User } from "@supabase/auth-helpers-nextjs";
import { useUser } from "@supabase/auth-helpers-react";
import { useNewDiveContext } from "common/context/NewDive";
import type { Dive, DiveFlattened } from "common/types";
import { supabase } from "common/utils/supabaseClient";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import Form from "../components/Form";
import generateDiveFlattenedObject from "../utils/generateDiveFlattenedObject";
import Header from "./Header";

const Edit: React.FC = () => {
  const { user } = useUser();
  const router = useRouter();
  const { id: diveId } = router.query;
  const { setNewDive } = useNewDiveContext();

  useEffect(() => {
    const getDiveById = async () => {
      const { data, error } = await supabase
        .from<Dive>("dives")
        .select("*")
        .match({ id: diveId });

      if (error) return console.error(error);

      if (data) {
        const dive = data[0];
        setNewDive(generateDiveFlattenedObject(dive));
      }
    };

    if (user) getDiveById();
  }, [user]);

  return (
    <>
      <Header />

      <Form onSubmit={() => {}} />
    </>
  );
};

export default Edit;
