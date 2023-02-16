import AddRounded from "@mui/icons-material/AddRounded";
import RefreshRounded from "@mui/icons-material/RefreshRounded";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import type { User } from "@supabase/supabase-js";
import type { Dive } from "common/types";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

import LatestDives from "./LatestDives";
import Statistics from "./Statistics";

interface HomeProps {
  user: User;
  dives: Array<Dive>;
}

const Home: React.FC<HomeProps> = ({ user, dives }) => {
  const router = useRouter();

  const divesCount = useMemo(() => dives.length, [dives]);

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

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          mt: 2
        }}
      >
        <NextLink href="/dives/new" passHref>
          <Button startDecorator={<AddRounded />} component="a" size="lg">
            Log dive
          </Button>
        </NextLink>

        <IconButton
          color="neutral"
          size="sm"
          variant="plain"
          onClick={() => router.replace("/")}
        >
          <RefreshRounded />
        </IconButton>
      </Box>

      <Grid
        container
        columnSpacing={{ xs: 0, sm: 2 }}
        gap={{ xs: 6, sm: 0 }}
        mt={6}
      >
        <Grid xs={12} sm={6} md={8}>
          <LatestDives dives={dives} />
        </Grid>

        <Grid xs={12} sm={6} md={4}>
          <Statistics dives={dives} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
