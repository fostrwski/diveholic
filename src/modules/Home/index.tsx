import React from "react";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/joy/Grid";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import DownloadRounded from "@mui/icons-material/DownloadRounded";
import AddRounded from "@mui/icons-material/AddRounded";
import Checkbox from "@mui/joy/Checkbox";
import LatestDives from "./LatestDives";
import TimelapseRounded from "@mui/icons-material/TimelapseRounded";

const Home: React.FC = () => {
  const gear = ["BP/w", "Regulators", "Fins", "Mask", "Wetsuit"];

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
        <Grid item xs={12}>
          <LatestDives />
        </Grid>

        <Grid item xs={12}>
          <Typography level="h4" component="div">
            Statistics
          </Typography>

          <List
            size="lg"
            sx={{
              mt: 2,
              "--List-item-paddingX": "0px",
              "--List-item-minHeight": "6px",
            }}
            variant="pklain"
          >
            <ListItem>
              <ListItemDecorator>
                <TimelapseRounded />
              </ListItemDecorator>
              Total 574min
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <DownloadRounded />
              </ListItemDecorator>
              Max 32.2m
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12}>
          <Box display="flex" alignItems="center" justifyContent="space-between" gap={2}>
            <Typography level="h4" component="div" gutterBottom>
              Checklist
            </Typography>
            <Button
              color="danger"
              variant="plain"
            >
              Reset
            </Button>
          </Box>

          <Typography level="h6" textColor="neutral.400" component="p">
            Make sure you took everything for your next dive!
          </Typography>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            {gear.map((item) => (
              <Grid item xs={6} key={item}>
                <Checkbox
                  label={item}
                  size="lg"
                  variant="soft"
                  color="neutral"
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
