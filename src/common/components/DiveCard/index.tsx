import AccessTimeRounded from "@mui/icons-material/AccessTimeRounded";
import DeviceThermostatRounded from "@mui/icons-material/DeviceThermostatRounded";
import DownloadRounded from "@mui/icons-material/DownloadRounded";
import ScubaDivingRounded from "@mui/icons-material/ScubaDivingRounded";
import TimelapseRounded from "@mui/icons-material/TimelapseRounded";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import type { Dive } from "common/types";
import React from "react";

interface DiveCard {
  dive: Dive;
}

const DiveCard: React.FC<DiveCard> = ({ dive }) => {
  return (
    <Card
      sx={{
        display: "flex",
        gap: 2,
        flexDirection: "row",
      }}
    >
      <Avatar color="neutral" size="lg">
        <ScubaDivingRounded />
      </Avatar>
      <CardContent>
        <Typography component="p" textColor="neutral.600">
          {dive.date}
        </Typography>

        <Box my={1}>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography component="p" startDecorator={<AccessTimeRounded />}>
                {dive.time}
              </Typography>
              <Typography component="p" startDecorator={<TimelapseRounded />}>
                {dive.length}min
              </Typography>
            </Grid>
            <Grid xs={6}>
              <Typography component="p" startDecorator={<DownloadRounded />}>
                {dive.maxDepth}m
              </Typography>
              <Typography
                component="p"
                startDecorator={<DeviceThermostatRounded />}
              >
                {dive.temperature.water.average}°C
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box alignSelf="end">
          <Chip
            color="neutral"
            variant="soft"
            startDecorator="🇭🇷"
            sx={{ mt: 2 }}
          >
            {dive.location.city}, {dive.location.country}
          </Chip>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DiveCard;
