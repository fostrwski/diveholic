import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import TextSeparator from "common/components/TextSeparator";
import { useNewDiveContext } from "common/context/NewDive";
import React from "react";

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
          <TemperatureSlider
            label="Air 💨"
            min={-50}
            max={50}
            marks={[-50, -25, 0, 25, 50]}
            value={newDive.temperatureAir || 0}
            onChange={(e: any) =>
              updateNewDiveProp("temperatureAir", parseInt(e.target.value))
            }
          />
        </Grid>
        <Grid xs={12}>
          <TemperatureSlider
            label="Water surface 🌊"
            min={-30}
            max={40}
            color="primary"
            marks={[-30, -15, 0, 20, 40]}
            value={newDive.temperatureWaterSurface || 0}
            onChange={(e: any) =>
              updateNewDiveProp(
                "temperatureWaterSurface",
                parseInt(e.target.value)
              )
            }
          />
        </Grid>
        <Grid xs={12}>
          <TemperatureSlider
            label="Water bottom 🔽"
            min={-30}
            max={40}
            color="warning"
            marks={[-30, -15, 0, 20, 40]}
            value={newDive.temperatureWaterBottom || 0}
            onChange={(e: any) =>
              updateNewDiveProp(
                "temperatureWaterBottom",
                parseInt(e.target.value)
              )
            }
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Temperature;
