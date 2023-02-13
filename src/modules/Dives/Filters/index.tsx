import { getCountryData } from "@franekostrowski/country-utils";
import Box from "@mui/joy/Box";
import Checkbox from "@mui/joy/Checkbox";
import Chip from "@mui/joy/Chip";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import type { Dive } from "common/types";
import React from "react";

interface FiltersProps {
  dives: Array<Dive>;
}

function getDiveLocationCountryCodes(dives: Array<Dive>) {
  type DiveLocation = {
    [key: string]: number;
  };
  const diveLocationCountryCodes: DiveLocation = {};

  dives.forEach((dive) => {
    // eslint-disable-next-line no-unused-expressions
    dive.location.country.code in diveLocationCountryCodes
      ? (diveLocationCountryCodes[dive.location.country.code] += 1)
      : (diveLocationCountryCodes[dive.location.country.code] = 1);
  });

  return diveLocationCountryCodes;
}

const Filters: React.FC<FiltersProps> = ({ dives }) => {
  const diveLocationCountryCodes = getDiveLocationCountryCodes(dives);
  const diveLocations = Object.keys(diveLocationCountryCodes).map(
    (diveLocationCountryCode) => ({
      ...getCountryData(diveLocationCountryCode),
      diveCount: diveLocationCountryCodes[diveLocationCountryCode]
    })
  );

  return (
    <Grid container sx={{ mt: 2 }} spacing={2}>
      <Grid xs={12} md={6}>
        <Typography fontWeight="md" mb={1}>
          Location
        </Typography>
        <Box
          role="group"
          sx={{
            display: "flex",
            gap: 0.8,
            overflowX: "auto",
            scrollBehavior: "smooth",

            "&::-webkit-scrollbar": {
              display: "none"
            }
          }}
        >
          {diveLocations.map((diveLocationCountry) => (
            <Chip
              key={diveLocationCountry.code}
              startDecorator={diveLocationCountry.flag}
              variant="outlined"
              endDecorator={`(${diveLocationCountry.diveCount})`}
            >
              <Checkbox
                overlay
                disableIcon
                variant="plain"
                label={diveLocationCountry.name}
              />
            </Chip>
          ))}
        </Box>
      </Grid>

      <Grid xs={12} md={6}>
        <Typography fontWeight="md" mb={1}>
          Date
        </Typography>
        <Box></Box>
      </Grid>
    </Grid>
  );
};

export default Filters;
