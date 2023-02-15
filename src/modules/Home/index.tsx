import AddRounded from "@mui/icons-material/AddRounded";
import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import type { User } from "@supabase/supabase-js";
import type { Dive } from "common/types";
import NextLink from "next/link";
import React, { useMemo } from "react";

import LatestDives from "./LatestDives";
import Statistics from "./Statistics";

interface HomeProps {
  user: User;
  dives: Array<Dive>;
}

const Home: React.FC<HomeProps> = ({ user, dives }) => {
  const divesCount = useMemo(() => dives.length, [dives.length]);

  return (
    <>
      <Typography level="h4" component="h1">
        Hi {user.user_metadata.first_name} 🤿
      </Typography>

      <Typography level="h6" textColor="GrayText" component="h2">
        {dives?.length ? (
          <>
            You've logged{" "}
            <Typography component="span" color="primary">
              {divesCount} {divesCount === 1 ? "dive" : "dives"}
            </Typography>{" "}
            so far
          </>
        ) : (
          <>
            You{" "}
            <Typography component="span" color="primary">
              haven't logged any dives
            </Typography>{" "}
            yet 😱
          </>
        )}
      </Typography>

      <NextLink href="/dives/new" passHref>
        <Button
          sx={{ mt: 2 }}
          startDecorator={<AddRounded />}
          component="a"
          size="lg"
        >
          Log dive
        </Button>
      </NextLink>

      <Grid container gap={6} mt={6}>
        <Grid xs={12}>
          <LatestDives dives={dives} />
        </Grid>

        <Grid xs={12}>
          <Statistics dives={dives} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
