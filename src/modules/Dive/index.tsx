import { useUser } from "@supabase/auth-helpers-react";
import type { Dive as DiveType } from "common/types";
import { supabase } from "common/utils/supabaseClient";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";

const Dive: React.FC = () => {
  const { user } = useUser();
  const router = useRouter();
  const [dive, setDive] = useState<DiveType | null>(null);

  useEffect(() => {
    const getDives = async () => {
      const { id: diveId } = router.query;
      const { data, error } = await supabase
        .from<DiveType>("dives")
        .select("*")
        .eq("id", diveId?.toString());

      if (error) console.error(error);
      if (data) setDive(data[0]);
    };

    if (user) getDives();
  }, [user]);

  return <></>;
};

export default Dive;
