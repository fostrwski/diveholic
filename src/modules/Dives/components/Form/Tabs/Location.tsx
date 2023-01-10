import FlagRounded from "@mui/icons-material/FlagRounded";
import PlaceRounded from "@mui/icons-material/PlaceRounded";
import PublicRounded from "@mui/icons-material/PublicRounded";
import { FormHelperText } from "@mui/joy";
import Autocomplete, { createFilterOptions } from "@mui/joy/Autocomplete";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Grid from "@mui/joy/Grid";
import Link from "@mui/joy/Link";
import TextField from "@mui/joy/TextField";
import { debounce } from "debounce";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import listOfCountries from "../utils/listOfCountries";

const Location: React.FC = () => {
  const {
    register,
    watch,
    formState: { errors }
  } = useFormContext();
  const watchLocationCountryFlagEmoji = watch("locationCountryFlagEmoji");
  const filterOptions = createFilterOptions({ limit: 20 });

  return (
    <>
      <Grid spacing={2} container>
        <Grid xs={6}>
          <FormControl error={!!errors.locationCountryName}>
            <FormLabel>Country</FormLabel>
            <Controller
              name="locationCountryName"
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  options={Object.values(listOfCountries)}
                  onInputChange={debounce(
                    (_: React.BaseSyntheticEvent, data: string) =>
                      field.onChange(data),
                    500
                  )}
                  onChange={(_: any, data: string) => field.onChange(data)}
                  placeholder="Croatia"
                  startDecorator={
                    watchLocationCountryFlagEmoji || <PublicRounded />
                  }
                  freeSolo
                  error={!!errors.locationCountryName}
                  filterOptions={filterOptions}
                  isOptionEqualToValue={(option, value) => option === value}
                  disableClearable
                />
              )}
            />
            <FormHelperText>
              {errors.locationCountryName?.message?.toString()}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={6}>
          <TextField
            {...register("locationCity")}
            type="text"
            label="City"
            placeholder="Trogir"
            helperText={errors.locationCity?.message?.toString()}
            error={!!errors.locationCity}
          />
        </Grid>
        <Grid xs={12}>
          <TextField
            {...register("locationDiveCenter")}
            type="text"
            label="Dive center"
            placeholder="Trogir dive center"
            startDecorator={<FlagRounded />}
            helperText={errors.locationDiveCenter?.message?.toString()}
            error={!!errors.locationDiveCenter}
          />
        </Grid>
      </Grid>

      <Link mt={4} startDecorator={<PlaceRounded />} color="info" disabled>
        Use previous dive location
      </Link>
    </>
  );
};

export default Location;
