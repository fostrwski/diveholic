import DeviceThermostatRounded from "@mui/icons-material/DeviceThermostatRounded";
import DownloadRounded from "@mui/icons-material/DownloadRounded";
import ScubaDivingRounded from "@mui/icons-material/ScubaDivingRounded";
import TimelapseRounded from "@mui/icons-material/TimelapseRounded";
import TitleRounded from "@mui/icons-material/TitleRounded";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import Separator from "common/components/Separator";
import type { Dive } from "common/types";
import { formatDate, formatTime } from "common/utils/datetime/format";
import NextLink from "next/link";
import React from "react";

interface DiveCard {
  dive: Dive;
}

const DiveCard: React.FC<DiveCard> = ({ dive }) => (
    <NextLink href={`/dives/${dive.id}`}>
      <Card
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: "row",
          cursor: "pointer",
        }}
      >
        <Avatar color="neutral" size="lg">
          <ScubaDivingRounded />
        </Avatar>
        <CardContent>
          <Typography component="p" level="subtitle1">
            {formatDate(dive.date)} &bull; {formatTime(dive.date)}
          </Typography>

          <Box my={2}>
            <Grid container spacing={2} sx={{ fontWeight: "md" }}>
              <Grid xs={6}>
                <Typography component="p" startDecorator={<TitleRounded />}>
                  {dive.type}
                </Typography>
                <Typography
                  component="p"
                  startDecorator={<DownloadRounded />}
                  endDecorator="m"
                >
                  {dive.depth.max}
                </Typography>
              </Grid>
              <Grid xs={6}>
                <Typography
                  component="p"
                  startDecorator={<TimelapseRounded />}
                  endDecorator="min"
                >
                  {dive.length}
                </Typography>
                <Typography
                  component="p"
                  startDecorator={<DeviceThermostatRounded />}
                  endDecorator="°C"
                >
                  {dive.temperature.water.bottom}
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
              size="sm"
              startDecorator={dive.location.country.flagEmoji}
            >
              {dive.location.city}, {dive.location.country.name}
            </Chip>
          </Box>
        </CardContent>
      </Card>
    </NextLink>
);

export default DiveCard;
