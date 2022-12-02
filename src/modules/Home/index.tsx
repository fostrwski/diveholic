import AddRounded from "@mui/icons-material/AddRounded";
import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import { User } from "@supabase/auth-helpers-nextjs";
import NextLink from "next/link";
import React from "react";

import Checklist from "./Checklist";
import LatestDives from "./LatestDives";
import Statistics from "./Statistics";

interface HomeProps {
  user: User;
  dives: any;
}

const Home: React.FC<HomeProps> = ({ user, dives }) => {
  return (
    <>
      <Typography level="h4" component="h1">
        Hi {user.user_metadata.first_name} 🤿
      </Typography>

      <Typography level="h6" textColor="GrayText" component="h2">
        You've logged {dives?.length} dives so far
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
          <LatestDives />
        </Grid>

        {/* <Grid xs={12}> */}
        {/*   <Statistics /> */}
        {/* </Grid> */}

        {/* <Grid xs={12}> */}
        {/*   <Checklist /> */}
        {/* </Grid> */}
      </Grid>
    </>
  );
};

export default Home;
