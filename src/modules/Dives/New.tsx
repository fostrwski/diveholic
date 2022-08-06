import {
  CalendarTodayRounded,
  CloseRounded,
  FlagRounded,
  LineWeightRounded,
  NumbersRounded,
  PublicRounded,
  ScaleRounded,
  ScheduleRounded,
  StarBorderRounded,
} from "@mui/icons-material";
import AddRounded from "@mui/icons-material/AddRounded";
import DoneRounded from "@mui/icons-material/DoneRounded";
import DownloadRounded from "@mui/icons-material/DownloadRounded";
import TimelapseRounded from "@mui/icons-material/TimelapseRounded";
import { Button } from "@mui/joy";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Grid from "@mui/joy/Grid";
import IconButton from "@mui/joy/IconButton";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import { useRouter } from "next/router";
import React from "react";

const New: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Chip startDecorator={<AddRounded />} variant="soft" size="lg">
          New dive
        </Chip>

        <IconButton
          aria-label="Cancel adding new dive"
          variant="plain"
          color="danger"
          onClick={() => router.push("/")}
        >
          <CloseRounded />
        </IconButton>
      </Box>

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
          <TextField
            type="date"
            label="Date"
            fullWidth
            startDecorator={<CalendarTodayRounded />}
            required
          />
          <TextField
            type="time"
            label="Time"
            fullWidth
            startDecorator={<ScheduleRounded />}
            required
          />
        </Box>

        <Grid mt={2} spacing={2} container>
          <Grid xs={6}>
            <TextField
              type="text"
              label="Country"
              startDecorator={<PublicRounded />}
              required
            />
          </Grid>
          <Grid xs={6}>
            <TextField type="text" label="City" required />
          </Grid>
          <Grid xs={12}>
            <TextField
              type="text"
              label="Dive center"
              startDecorator={<FlagRounded />}
            />
          </Grid>
        </Grid>

        <Box
          width="15%"
          bgcolor="neutral.400"
          height="2px"
          mx="auto"
          borderRadius="4px"
        />

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
            <TextField type="number" label="Air" fullWidth endDecorator="°C" />
          </Grid>
          <Grid xs={4}>
            <TextField
              type="number"
              label="Water avg."
              fullWidth
              endDecorator="°C"
            />
          </Grid>
          <Grid xs={4}>
            <TextField
              type="number"
              label="Water min."
              fullWidth
              endDecorator="°C"
            />
          </Grid>
        </Grid>

        <TextField type="text" label="Notes" sx={{ mt: 2 }} />

        <Button
          type="submit"
          color="success"
          size="lg"
          startIcon={<DoneRounded />}
          sx={{ mt: 4 }}
        >
          Save
        </Button>
      </Box>
    </>
  );
};

export default New;
