import { getCountryData } from '@franekostrowski/country-utils';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import Chip from '@mui/joy/Chip';
import Grid from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';
import type { Dive } from 'common/types';
import React, { type Dispatch, type SetStateAction } from 'react';

import type { FiltersState } from '../index';
import getDiveLocationCountryCodes from './getDiveLocationCountryCodes';

interface LocationProps {
  dives: Array<Dive>;
  filters: FiltersState;
  setFilters: Dispatch<SetStateAction<FiltersState>>;
}

const Location: React.FC<LocationProps> = ({ dives, filters, setFilters }) => {
  const diveLocationCountryCodes = getDiveLocationCountryCodes(dives);
  const diveLocations = Object.keys(diveLocationCountryCodes).map(
    (diveLocationCountryCode) => ({
      ...getCountryData(diveLocationCountryCode),
      diveCount: diveLocationCountryCodes[diveLocationCountryCode],
    }),
  );

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const countryCode = e.target.defaultValue;

    if (filters.countryCodes.includes(countryCode)) {
      setFilters((previousFilters) => ({
        ...previousFilters,
        countryCodes: previousFilters.countryCodes.filter(
          (item) => item !== countryCode,
        ),
      }));
      return;
    }

    setFilters((previousFilters) => ({
      ...previousFilters,
      countryCodes: [...previousFilters.countryCodes, countryCode],
    }));
  };

  return (
    <Grid container sx={{ mt: 2 }} spacing={2}>
      <Grid xs={12} md={6}>
        <Typography fontWeight="md" mb={1}>
          Location
        </Typography>
        <Box
          role="group"
          aria-label="Dive location"
          sx={{
            display: 'flex',
            gap: 0.8,
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {diveLocations.map((diveLocationCountry) => (
            <Chip
              key={diveLocationCountry.code}
              startDecorator={diveLocationCountry.flag}
              variant="outlined"
              endDecorator={`(${diveLocationCountry.diveCount})`}
              color={
                filters.countryCodes.includes(
                  diveLocationCountry.code as string,
                )
                  ? 'info'
                  : 'neutral'
              }
            >
              <Checkbox
                overlay
                disableIcon
                variant="plain"
                // @ts-ignore
                color="inherit"
                label={diveLocationCountry.name}
                value={diveLocationCountry.code}
                onChange={onCheckboxChange}
              />
            </Chip>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Location;
