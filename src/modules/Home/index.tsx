import React from "react";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/joy/Grid";
import Button from "@mui/joy/Button";
import AddRounded from "@mui/icons-material/AddRounded";
import LatestDives from "./LatestDives";
import Statistics from "./Statistics";
import Checklist from "./Checklist";

const Home: React.FC = () => {
  return (
    <>
      <Typography level="h4" component="div">
        Hi Franek 🤿
      </Typography>

      <Typography level="h6" textColor="neutral.400">
        You've logged 2 dives so far
      </Typography>

      <Button
        size="lg"
        variant="soft"
        startIcon={<AddRounded />}
        sx={{ mt: 2, mb: 6 }}
      >
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
