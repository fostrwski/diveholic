import FlagRounded from "@mui/icons-material/FlagRounded";
import PlaceRounded from "@mui/icons-material/PlaceRounded";
import PublicRounded from "@mui/icons-material/PublicRounded";
import Grid from "@mui/joy/Grid";
import Link from "@mui/joy/Link";
import TextField from "@mui/joy/TextField";
import React from "react";

import type { ComponentWithTextFieldsProps } from "../types";

const Location: React.FC<ComponentWithTextFieldsProps> = ({
  dive,
  handleTextFieldChange,
}) => {
  return (
    <>
      <Grid spacing={2} container>
        <Grid xs={6}>
          <TextField
            type="text"
            name="locationCountry"
            placeholder="Croatia"
            label="Country"
            value={dive.locationCountryName}
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
            placeholder="Trogir"
            value={dive.locationCity}
            onChange={(e) => handleTextFieldChange(e, "locationCity")}
          />
        </Grid>
        <Grid xs={12}>
          <TextField
            type="text"
            name="locationDiveCenter"
            label="Dive center"
            placeholder="Trogir dive center"
            startDecorator={<FlagRounded />}
            value={dive.locationDiveCenter}
            onChange={(e) => handleTextFieldChange(e, "locationDiveCenter")}
          />
        </Grid>
      </Grid>
      <Link mt={4} startDecorator={<PlaceRounded />} color="info">
        Fill in with location from your latest dive
      </Link>
    </>
  );
};

export default Location;
