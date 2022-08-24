import Box from "@mui/joy/Box";
import Grid from "@mui/joy/Grid";
import JoyLink from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import { useUser } from "@supabase/auth-helpers-react";
import DiveCard from "common/components/DiveCard";
import { Dive } from "common/types";
import { supabase } from "common/utils/supabaseClient";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";

const LatestDives: React.FC = () => {
  const { user } = useUser();
  const [dives, setDives] = useState<Array<Dive>>([]);

  useEffect(() => {
    const getDives = async () => {
      const { data, error } = await supabase.from<Dive>("dives").select("*");

      if (error) console.error(error);

      if (data) setDives(data);
    };

    if (user) getDives();
  }, [user]);
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
        {dives.map((dive) => (
          <Grid xs={12} key={dive.id}>
            <DiveCard dive={dive} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default LatestDives;
