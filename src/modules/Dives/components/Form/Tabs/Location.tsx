import FlagRounded from "@mui/icons-material/FlagRounded";
import PlaceRounded from "@mui/icons-material/PlaceRounded";
import PublicRounded from "@mui/icons-material/PublicRounded";
import Grid from "@mui/joy/Grid";
import Link from "@mui/joy/Link";
import TextField from "@mui/joy/TextField";
import { useFormikContext } from "formik";
import React from "react";

import type { FormFields } from "../types";

const Location: React.FC = () => {
  const formik = useFormikContext<FormFields>();

  return (
    <>
      <Grid spacing={2} container>
        <Grid xs={6}>
          <TextField
            type="text"
            name="locationCountryName"
            placeholder="Croatia"
            label="Country"
            value={formik.values.locationCountryName}
            onChange={formik.handleChange}
            startDecorator={
              formik.values.locationCountryFlagEmoji ? (
                formik.values.locationCountryFlagEmoji
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
            value={formik.values.locationCity}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid xs={12}>
          <TextField
            type="text"
            name="locationDiveCenter"
            label="Dive center"
            placeholder="Trogir dive center"
            startDecorator={<FlagRounded />}
            value={formik.values.locationDiveCenter}
            onChange={formik.handleChange}
          />
        </Grid>
      </Grid>
      <Link mt={4} startDecorator={<PlaceRounded />} color="info" disabled>
        Fill in with location from your latest dive
      </Link>
    </>
  );
};

export default Location;
