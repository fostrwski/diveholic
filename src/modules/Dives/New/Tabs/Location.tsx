import FlagRounded from "@mui/icons-material/FlagRounded";
import PublicRounded from "@mui/icons-material/PublicRounded";
import Grid from "@mui/joy/Grid";
import TextField from "@mui/joy/TextField";
import React from "react";

import type { TabProps } from "./types";

const Location: React.FC<TabProps> = ({ dive, handleTextFieldChange }) => {
  return (
    <Grid container spacing={2}>
      <Grid spacing={2} container>
        <Grid xs={6}>
          <TextField
            type="text"
            name="locationCountry"
            label="Country"
            onChange={(e) => handleTextFieldChange(e, "locationCountryName")}
            startDecorator={
              dive.locationCountryFlagEmoji ? (
                dive.locationCountryFlagEmoji
              ) : (
                <PublicRounded />
              )
            }
          />
        </Grid>
        <Grid xs={6}>
          <TextField
            type="text"
            name="locationCity"
            label="City"
            onChange={(e) => handleTextFieldChange(e, "locationCity")}
          />
        </Grid>
        <Grid xs={12}>
          <TextField
            type="text"
            name="locationDiveCenter"
            label="Dive center"
            startDecorator={<FlagRounded />}
            onChange={(e) => handleTextFieldChange(e, "locationDiveCenter")}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Location;
