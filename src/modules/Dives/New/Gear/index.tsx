import LineWeightRounded from "@mui/icons-material/LineWeightRounded";
import NumbersRounded from "@mui/icons-material/NumbersRounded";
import Grid from "@mui/joy/Grid";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import TextSeparator from "common/components/TextSeparator";
import React from "react";

import type { ComponentWithTextFieldsProps } from "../types";

const Gear: React.FC<ComponentWithTextFieldsProps> = ({
  dive,
  handleTextFieldChange,
}) => {
  return (
    <>
      <TextSeparator sx={{ mt: 8 }}>Gear</TextSeparator>
      <Typography
        mb={2}
        component="p"
        textColor="GrayText"
        fontWeight="md"
        mt={4}
      >
        Exposure protection
      </Typography>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid xs={6}>
          <TextField
            type="text"
            name="exposureProtectionType"
            label="Type"
            onChange={(e) =>
              handleTextFieldChange(e, "gearExposureProtectionType")
            }
          />
        </Grid>
        <Grid xs={6}>
          <TextField
            type="text"
            name="exposureProtectionThickness"
            label="Thickness"
            startDecorator={<LineWeightRounded />}
            onChange={(e) =>
              handleTextFieldChange(e, "gearExposureProtectionThickness")
            }
          />
        </Grid>
      </Grid>

      <Typography
        mb={2}
        mt={4}
        component="p"
        textColor="GrayText"
        fontWeight="md"
      >
        Tanks
      </Typography>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid xs={6}>
          <TextField
            type="number"
            name="count"
            label="Count"
            startDecorator={<NumbersRounded />}
            onChange={(e) => handleTextFieldChange(e, "gearTanksCount")}
          />
        </Grid>
        <Grid xs={6}>
          <TextField
            type="text"
            name="tankType"
            label="Type"
            onChange={(e) => handleTextFieldChange(e, "gearTanksType")}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Gear;
