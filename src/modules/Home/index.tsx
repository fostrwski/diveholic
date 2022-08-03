import AddRounded from "@mui/icons-material/AddRounded";
import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import { User } from "@supabase/auth-helpers-nextjs";
import React from "react";

import Checklist from "./Checklist";
import LatestDives from "./LatestDives";
import Statistics from "./Statistics";

interface HomeProps {
  user: User;
}

const Home: React.FC<HomeProps> = ({ user }) => {
  return (
    <>
      <Typography level="h4" component="div">
        Hi {user.user_metadata.first_name} 🤿
      </Typography>

      <Typography level="h6" textColor="neutral.400">
        You've logged 2 dives so far
      </Typography>

      <Button size="lg" startIcon={<AddRounded />} sx={{ mt: 2, mb: 6 }}>
        Log dive
      </Button>

      <Grid container gap={6}>
        <Grid xs={12}>
          <LatestDives />
        </Grid>

        <Grid xs={12}>
          <Statistics />
        </Grid>

        <Grid xs={12}>
          <Checklist />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
