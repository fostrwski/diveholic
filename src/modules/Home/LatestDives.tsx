import AccessTimeRounded from "@mui/icons-material/AccessTimeRounded";
import DeviceThermostatRounded from "@mui/icons-material/DeviceThermostatRounded";
import DownloadRounded from "@mui/icons-material/DownloadRounded";
import LocationOnRounded from "@mui/icons-material/LocationOnRounded";
import ScubaDivingRounded from "@mui/icons-material/ScubaDivingRounded";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import JoyLink from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import React from "react";
import dives from "common/utils/dives";
import TimelapseRounded from "@mui/icons-material/TimelapseRounded";

const LatestDives: React.FC = () => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
        mb={2}
      >
        <Typography level="h4" component="div">
          Your dives
        </Typography>
        <JoyLink>See all</JoyLink>
      </Box>

      <Grid container gap={2}>
        {dives.map((dive) => (
          <Grid xs={12} key={dive.id}>
            <Card
              variant="outlined"
              sx={{ display: "flex", gap: 2, flexDirection: "row" }}
            >
              <Avatar color="primary" size="lg">
                <ScubaDivingRounded />
              </Avatar>
              <CardContent>
                <Typography component="p" textColor="neutral.600">
                  {dive.date}
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
                        startDecorator={<TimelapseRounded />}
                      >
                        {dive.length}min
                      </Typography>
                    </Grid>
                    <Grid xs={6}>
                      <Typography
                        component="p"
                        startDecorator={<DownloadRounded />}
                      >
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
                    startDecorator={<LocationOnRounded />}
                    sx={{ mt: 2 }}
                  >
                    {dive.location.city}, {dive.location.country}
                  </Chip>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default LatestDives;
