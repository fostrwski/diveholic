import Box from "@mui/joy/Box";
import Grid from "@mui/joy/Grid";
import JoyLink from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import { useUser } from "@supabase/auth-helpers-react";
import { Dive } from "common/types";
import { supabase } from "common/utils/supabaseClient";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";

import DiveCards from "./DiveCards";
import DivesLoading from "./DivesLoading";
import DivesNotFound from "./DivesNotFound";

const LatestDives: React.FC = () => {
  const { user } = useUser();
  const [dives, setDives] = useState<Array<Dive>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getDives = async () => {
      setLoading(true);
      const { data, error } = await supabase.from<Dive>("dives").select("*");

      if (error) console.error(error);

      if (data) setDives(data);

      setLoading(false);
    };

    if (user) getDives();
  }, [user]);

  const determineView = () => {
    if (user && !loading && dives.length === 0) return <DivesNotFound />;

    if (user && loading) return <DivesLoading />;

    return <DiveCards dives={dives} />;
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
        mb={2}
      >
        <Typography level="h4" component="div">
          Your dives
        </Typography>
        <NextLink href="/dives" passHref>
          <JoyLink>See all</JoyLink>
        </NextLink>
      </Box>

      <Grid container gap={2}>
        {determineView()}
      </Grid>
    </>
  );
};

export default LatestDives;
