import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import TextSeparator from "common/components/TextSeparator";
import React from "react";
import { Controller } from "react-hook-form";

import TemperatureSlider from "./Slider";

const Temperature: React.FC = () => (
  <>
    <TextSeparator sx={{ mt: 8 }}>Weather</TextSeparator>
    <Typography
      mb={2}
      mt={4}
      component="p"
      textColor="GrayText"
      fontWeight="md"
    >
      Temperature
    </Typography>
    <Grid container spacing={4} justifyContent="space-between" sx={{ px: 2 }}>
      <Grid xs={12}>
        <Controller
          name="temperatureAir"
          render={({ field: { value, onChange } }) => (
            <TemperatureSlider
              value={value}
              onChange={onChange}
              label="Air 💨"
              min={-30}
              max={50}
              marks={[-30, 15, 0, 25, 50]}
            />
          )}
        />
      </Grid>
      <Grid xs={12}>
        <Controller
          name="temperatureWaterSurface"
          render={({ field: { value, onChange } }) => (
            <TemperatureSlider
              value={value}
              onChange={onChange}
              label="Water surface 🌊"
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
          name="temperatureWaterBottom"
          render={({ field: { value, onChange } }) => (
            <TemperatureSlider
              value={value}
              onChange={onChange}
              label="Water bottom 🔽"
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
