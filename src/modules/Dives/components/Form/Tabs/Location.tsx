import FlagRounded from "@mui/icons-material/FlagRounded";
import PlaceRounded from "@mui/icons-material/PlaceRounded";
import PublicRounded from "@mui/icons-material/PublicRounded";
import Grid from "@mui/joy/Grid";
import Link from "@mui/joy/Link";
import TextField from "@mui/joy/TextField";
import React from "react";
import { useFormContext } from "react-hook-form";

const Location: React.FC = () => {
  const { register, getValues } = useFormContext();

  return (
    <>
      <Grid spacing={2} container>
        <Grid xs={6}>
          <TextField
            type="text"
            placeholder="Croatia"
            label="Country"
            {...register("locationCountryName")}
            startDecorator={
              getValues("locationCountryFlagEmoji") ? (
                getValues("locationCountryFlagEmoji")
              ) : (
                <PublicRounded />
              )
            }
          />
        </Grid>
        <Grid xs={6}>
          <TextField
            type="text"
            label="City"
            placeholder="Trogir"
            {...register("locationCountryCity")}
          />
        </Grid>
        <Grid xs={12}>
          <TextField
            type="text"
            label="Dive center"
            placeholder="Trogir dive center"
            startDecorator={<FlagRounded />}
            {...register("locationDiveCenter")}
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
