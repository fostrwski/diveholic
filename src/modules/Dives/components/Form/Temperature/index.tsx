import Grid from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';
import TextSeparator from 'common/components/TextSeparator';
import React from 'react';
import { Controller } from 'react-hook-form';

import TemperatureSlider from './Slider';

const Temperature: React.FC = () => (
  <>
    <TextSeparator>Weather</TextSeparator>
    <Typography
      mb={2}
      mt={4}
      component="p"
      level="subtitle1"
      id="temperatureLabel"
    >
      Temperature
    </Typography>
    <Grid
      container
      spacing={4}
      justifyContent="space-between"
      sx={{ px: 2 }}
      role="group"
      aria-labelledby="temperatureLabel"
    >
      <Grid xs={12}>
        <Controller
          name="temperature.air"
          render={({ field: { value, onChange, name } }) => (
            <TemperatureSlider
              name={name}
              value={value}
              onChange={onChange}
              label="Air"
              min={-30}
              max={50}
              marks={[-30, 15, 0, 25, 50]}
            />
          )}
        />
      </Grid>
      <Grid xs={12}>
        <Controller
          name="temperature.water.surface"
          render={({ field: { value, onChange, name } }) => (
            <TemperatureSlider
              name={name}
              value={value}
              onChange={onChange}
              label="Water surface"
              min={-30}
              max={40}
              color="primary"
              marks={[-30, -15, 0, 20, 40]}
            />
          )}
        />
      </Grid>
      <Grid xs={12}>
        <Controller
          name="temperature.water.bottom"
          render={({ field: { value, onChange, name } }) => (
            <TemperatureSlider
              name={name}
              value={value}
              onChange={onChange}
              label="Water bottom"
              min={-30}
              max={40}
              color="warning"
              marks={[-30, -15, 0, 20, 40]}
            />
          )}
        />
      </Grid>
    </Grid>
  </>
);

export default Temperature;
