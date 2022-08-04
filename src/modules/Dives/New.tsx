import {
  AirRounded,
  FlagRounded,
  LineWeightRounded,
  NumbersRounded,
  PublicRounded,
  ScaleRounded,
  WaterRounded,
} from "@mui/icons-material";
import AddRounded from "@mui/icons-material/AddRounded";
import DownloadRounded from "@mui/icons-material/DownloadRounded";
import TimelapseRounded from "@mui/icons-material/TimelapseRounded";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Grid from "@mui/joy/Grid";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import React from "react";

const New: React.FC = () => {
  return (
    <>
      <Chip startDecorator={<AddRounded />} variant="soft" size="lg">
        Log dive
      </Chip>

      <Typography level="h6" component="p" textColor="neutral.400" mt={2}>
        Fill in information about your dive 🤿
      </Typography>

      <Box
        component="form"
        mt={4}
        sx={{ display: "flex", gap: 2, flexDirection: "column" }}
      >
        <Typography level="h4" component="p">
          Basic information
        </Typography>

        <Box display="flex" justifyContent="space-between" gap={2}>
          <TextField type="date" label="Date" fullWidth />
          <TextField type="time" label="Time" fullWidth />
        </Box>

        <Grid mt={2} spacing={2} container>
          <Grid xs={6}>
            <TextField
              type="text"
              label="Country"
              startDecorator={<PublicRounded />}
            />
          </Grid>
          <Grid xs={6}>
            <TextField type="text" label="City" />
          </Grid>
          <Grid xs={12}>
            <TextField
              type="text"
              label="Dive center"
              startDecorator={<FlagRounded />}
            />
          </Grid>
        </Grid>

        <Box component="hr" width="15%" />

        <Typography level="h4" component="p" mt={2}>
          Dive details
        </Typography>

        <Grid container spacing={2}>
          <Grid xs={6}>
            <TextField
              type="number"
              label="Length"
              endDecorator="min"
              startDecorator={<TimelapseRounded />}
            />
          </Grid>
          <Grid xs={6}>
            <TextField
              type="number"
              label="Max depth"
              endDecorator="m"
              startDecorator={<DownloadRounded />}
            />
          </Grid>
          <Grid xs={6}>
            <TextField
              type="number"
              label="Weights"
              endDecorator="kg"
              startDecorator={<ScaleRounded />}
            />
          </Grid>
          <Grid xs={6}>
            <TextField type="text" label="Water" />
          </Grid>
        </Grid>

       <Typography level="h5" component="p" mt={2}>
          Exposure protection
        </Typography>

        <Grid container spacing={2} justifyContent="space-between">
          <Grid xs={6}>
            <TextField type="text" label="Type" />
          </Grid>
          <Grid xs={6}>
            <TextField
              type="text"
              label="Thickness"
              startDecorator={<LineWeightRounded />}
            />
          </Grid>
        </Grid>

 <Typography level="h5" component="p" mt={2}>
          Tanks
        </Typography>

        <Grid container spacing={2} justifyContent="space-between">
          <Grid xs={4}>
            <TextField
              type="number"
              label="Count"
              startDecorator={<NumbersRounded />}
            />
          </Grid>
          <Grid xs={4}>
            <TextField type="text" label="Type" />
          </Grid>
          <Grid xs={4}>
            <TextField type="number" label="Capacity" />
          </Grid>
        </Grid>
        
        <Typography level="h5" component="p" mt={2}>
          Temperature
        </Typography>

        <Grid container spacing={2} justifyContent="space-between">
          <Grid xs={4}>
            <TextField
              type="number"
              label="Air"
              fullWidth
              endDecorator="°C"
              startDecorator={<AirRounded />}
            />
          </Grid>
          <Grid xs={4}>
            <TextField
              type="number"
              label="Water avg."
              fullWidth
              endDecorator="°C"
              startDecorator={<WaterRounded />}
            />
          </Grid>
          <Grid xs={4}>
            <TextField
              type="number"
              label="Water min."
              fullWidth
              endDecorator="°C"
              startDecorator={<WaterRounded />}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default New;
