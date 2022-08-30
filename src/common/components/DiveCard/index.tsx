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
import Separator from "common/components/Separator";
import type { Dive } from "common/types";
import formatDate from "common/utils/formatDate";
import NextLink from "next/link";
import React from "react";

interface DiveCard {
  dive: Dive;
}

const DiveCard: React.FC<DiveCard> = ({ dive }) => {
  return (
    <NextLink href={`/dives/${dive.id}`}>
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
          <Typography component="p" textColor="GrayText">
            {formatDate(dive.date)}
          </Typography>

          <Box my={1}>
            <Grid container spacing={2}>
              <Grid xs={6}>
                <Typography
                  component="p"
                  startDecorator={<AccessTimeRounded />}
                >
                  {dive.time}
                </Typography>
                <Typography
                  component="p"
                  startDecorator={<DownloadRounded />}
                  sx={{ mt: 0.6 }}
                >
                  {dive.maxDepth}m
                </Typography>
              </Grid>
              <Grid xs={6}>
                <Typography component="p" startDecorator={<TimelapseRounded />}>
                  {dive.length}min
                </Typography>
                <Typography
                  component="p"
                  startDecorator={<DeviceThermostatRounded />}
                  sx={{ mt: 0.6 }}
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
            <Separator />

            <Chip
              color="neutral"
              variant="soft"
              startDecorator={dive.location.country.flagEmoji}
            >
              {dive.location.city}, {dive.location.country.name}
            </Chip>
          </Box>
        </CardContent>
      </Card>
    </NextLink>
  );
};

export default DiveCard;
