import { useUser } from "@supabase/auth-helpers-react";
import type { Dive as DiveType } from "common/types";
import { supabase } from "common/utils/supabaseClient";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import Loading from "../components/Loading";
import DiveView from "./DiveView";
import Error from "./Error";

const Dive: React.FC = () => {
  const { user } = useUser();
  const router = useRouter();

  const [dive, setDive] = useState<DiveType | null>(null);

  const [error, setError] = useState<any>(null);

  const [diveNotFound, setDiveNotFound] = useState<boolean>(false);

  const { id: diveId } = router.query;

  useEffect(() => {
    const getDive = async () => {
      setError(null);
      const { data, error } = await supabase
        .from<DiveType>("dives")
        .select("*")
        .match({ id: diveId });

      if (error) {
        setError(error);
        console.error(error);
        return;
      }

      if (data && data.length > 0) {
        setDive(data[0]);
        return;
      }

      setDiveNotFound(true);
    };

    if (user) getDive();
  }, [user, diveId]);

  const DetermineView: React.FC = () => {
    if (error) {
      return (
        <Error
          error={error}
          tip="Make sure you're connected to the internet and try refreshing the page"
        />
      );
    }

    if (user && diveNotFound) {
      return <Error error={error} customMessage="This dive does not exist" />;
    }

    if (dive) {
      return <DiveView dive={dive} />;
    }

    return <Loading />;
  };

  return (
    <>
      <NextSeo title="Dive lookup" description="Read about your dive" noindex />

      <DetermineView />
    </>
  );
};

export default Dive;
