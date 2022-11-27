import FlagRounded from "@mui/icons-material/FlagRounded";
import PlaceRounded from "@mui/icons-material/PlaceRounded";
import PublicRounded from "@mui/icons-material/PublicRounded";
import Grid from "@mui/joy/Grid";
import Link from "@mui/joy/Link";
import TextField from "@mui/joy/TextField";
import { useNewDiveContext } from "common/context/NewDive";
import React from "react";

const Location: React.FC = () => {
  const { newDive, updateNewDiveProp } = useNewDiveContext();

  return (
    <>
      <Grid spacing={2} container>
        <Grid xs={6}>
          <TextField
            type="text"
            name="locationCountryName"
            placeholder="Croatia"
            label="Country"
            value={newDive.locationCountryName}
            onChange={(e) =>
              updateNewDiveProp("locationCountryName", e.target.value)
            }
            startDecorator={
              newDive.locationCountryFlagEmoji ? (
                newDive.locationCountryFlagEmoji
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
            value={newDive.locationCity}
            onChange={(e) => updateNewDiveProp("locationCity", e.target.value)}
          />
        </Grid>
        <Grid xs={12}>
          <TextField
            type="text"
            name="locationDiveCenter"
            label="Dive center"
            placeholder="Trogir dive center"
            startDecorator={<FlagRounded />}
            value={newDive.locationDiveCenter}
            onChange={(e) =>
              updateNewDiveProp("locationDiveCenter", e.target.value)
            }
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
