import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import TextSeparator from "common/components/TextSeparator";
import { useNewDiveContext } from "common/context/NewDive";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import TemperatureSlider from "./Slider";

const Temperature: React.FC = () => {
  const { newDive, updateNewDiveProp } = useNewDiveContext();

  return (
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
            render={({ field }) => (
              <TemperatureSlider
                {...field}
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
            render={({ field }) => (
              <TemperatureSlider
                {...field}
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
            render={({ field }) => (
              <TemperatureSlider
                {...field}
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
};

export default Temperature;
