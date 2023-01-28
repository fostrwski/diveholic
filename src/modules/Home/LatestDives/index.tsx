import HistoryRounded from "@mui/icons-material/HistoryRounded";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import { useUser } from "@supabase/auth-helpers-react";
import type { Dive } from "common/types";
import { supabase } from "common/utils/supabaseClient";
import React, { useEffect, useState } from "react";

import DiveCards from "./DiveCards";
import Error from "./Error";
import Loading from "./Loading";
import NotFound from "./NotFound";

const LatestDives: React.FC = () => {
  const { user } = useUser();
  const [dives, setDives] = useState<Array<Dive>>([]);
  const [error, setError] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getDives = async () => {
      setError(false);
      setLoading(true);
      const { data, error } = await supabase
        .from<Dive>("dives")
        .select("*")
        .order("date", { ascending: false })
        .limit(2);

      if (error) {
        setError(true);
        console.error(error);
        return setLoading(false);
      }

      if (data) setDives(data);

      setLoading(false);
    };

    if (user) getDives();
  }, [user]);

  const determineView = () => {
    if (error) return <Error />;

    if (user && !loading && dives.length === 0) return <NotFound />;

    if (user && loading) return <Loading />;

    return <DiveCards dives={dives} />;
  };

  return (
    <>
      <Typography
        level="h5"
        component="p"
        startDecorator={<HistoryRounded />}
        mb={2}
      >
        Your dives
      </Typography>

      <Grid container gap={2}>
        {determineView()}
      </Grid>
    </>
  );
};

export default LatestDives;
