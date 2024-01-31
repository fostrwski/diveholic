import { listOfCountries } from '@franekostrowski/country-utils';
import FlagRounded from '@mui/icons-material/FlagRounded';
import PublicRounded from '@mui/icons-material/PublicRounded';
import Autocomplete, { createFilterOptions } from '@mui/joy/Autocomplete';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import Grid from '@mui/joy/Grid';
import TextField from '@mui/joy/TextField';
import { debounce } from 'debounce';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import type { FormFields } from '../../types';
import PreviousDiveLocationButton from './PreviousDiveLocationButton';

const Location: React.FC = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<FormFields>();

  const filterOptions = createFilterOptions({ limit: 20 });
  const watchLocationCountryFlagEmoji = watch('location.country.flagEmoji');

  return (
    <>
      <Grid spacing={2} container>
        <Grid xs={6}>
          <FormControl error={!!errors.location?.country?.name}>
            <FormLabel required>Country</FormLabel>
            <Controller
              name="location.country.name"
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  options={Object.values(listOfCountries)}
                  onChange={debounce(
                    (_: React.BaseSyntheticEvent, data: string) =>
                      field.onChange(data),
                    500,
                  )}
                  placeholder="Croatia"
                  startDecorator={
                    watchLocationCountryFlagEmoji || <PublicRounded />
                  }
                  error={!!errors.location?.country?.name}
                  filterOptions={filterOptions}
                  disableClearable
                  autoComplete
                  forcePopupIcon={false}
                />
              )}
            />
            <FormHelperText>
              {/* TODO: add validation message when wrong country code  */}
              {errors.location?.country?.name?.message?.toString()}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={6}>
          <TextField
            {...register('location.city')}
            type="text"
            label="City"
            placeholder="Trogir"
            helperText={errors.location?.city?.message?.toString()}
            error={!!errors.location?.city}
            required
          />
        </Grid>
        <Grid xs={12}>
          <TextField
            {...register('location.diveSpot')}
            type="text"
            label="Dive spot"
            startDecorator={<FlagRounded />}
            helperText={errors.location?.diveSpot?.message?.toString()}
            error={!!errors.location?.diveSpot}
            required
          />
        </Grid>
      </Grid>

      <PreviousDiveLocationButton />
    </>
  );
};

export default Location;
