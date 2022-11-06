import Grid from "@mui/joy/Grid";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import TextSeparator from "common/components/TextSeparator";
import React from "react";

import type { ComponentWithTextFieldsProps } from "../types";

const Temperature: React.FC<ComponentWithTextFieldsProps> = ({
  dive,
  handleTextFieldChange,
}) => {
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
      <Grid container spacing={2} justifyContent="space-between">
        <Grid xs={4}>
          <TextField
            type="number"
            name="temperatureAir"
            label="Air"
            fullWidth
            endDecorator="°C"
            onChange={(e) => handleTextFieldChange(e, "temperatureAir")}
          />
        </Grid>
        <Grid xs={4}>
          <TextField
            type="number"
            name="temperatureWaterSurface"
            label="Water surface"
            fullWidth
            endDecorator="°C"
            onChange={(e) =>
              handleTextFieldChange(e, "temperatureWaterSurface")
            }
          />
        </Grid>
        <Grid xs={4}>
          <TextField
            type="number"
            name="temperatureWaterBottom"
            label="Water bottom"
            fullWidth
            endDecorator="°C"
            onChange={(e) => handleTextFieldChange(e, "temperatureWaterBottom")}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Temperature;
