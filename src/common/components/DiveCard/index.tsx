import AccessTimeRounded from "@mui/icons-material/AccessTimeRounded";
import DeviceThermostatRounded from "@mui/icons-material/DeviceThermostatRounded";
import DownloadRounded from "@mui/icons-material/DownloadRounded";
import ScubaDivingRounded from "@mui/icons-material/ScubaDivingRounded";
import TimelapseRounded from "@mui/icons-material/TimelapseRounded";
import { ListDivider } from "@mui/joy";
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
  const formatDateString = (date: string) => {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    const dateF = new Date(date);

    // @ts-ignore
    return dateF.toLocaleDateString(undefined, options);
  };

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
          {formatDateString(dive.date)}
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

        <Box
          mt={2}
          display="flex"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <ListDivider sx={{ width: "100%", height: "2px" }} />

          <Chip color="neutral" variant="soft" startDecorator="🇭🇷">
            {dive.location.city}, {dive.location.country}
          </Chip>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DiveCard;
