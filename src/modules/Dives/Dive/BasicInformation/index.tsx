import ScaleRounded from "@mui/icons-material/ScaleRounded";
import TimelapseRounded from "@mui/icons-material/TimelapseRounded";
import TitleRounded from "@mui/icons-material/TitleRounded";
import WavesRounded from "@mui/icons-material/WavesRounded";
import Grid from "@mui/joy/Grid";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import type { Dive } from "common/types";
import React from "react";

import Info from "./Info";

interface BasicInformationProps {
  dive: Dive;
}

const BasicInformation: React.FC<BasicInformationProps> = ({ dive }) => (
  <>
    <Typography component="p" mb={2} level="subtitle1">
      Basic information
    </Typography>

    <Sheet
variant="soft"
      sx={(theme) => ({
        borderBottomWidth: theme.spacing(0.4),
        borderBottomStyle: "solid",

        [theme.getColorSchemeSelector("light")]: {
          borderColor: "neutral.200"
        },
        [theme.getColorSchemeSelector("dark")]: {
          borderColor: "neutral.800"
        }
      })}
    >
      <Grid container spacing={1}>
        {dive.type && (
          <Grid xs={12}>
            <Info title="Type" value={dive.type} icon={<TitleRounded />} />
          </Grid>
        )}
        {dive.length && (
          <Grid xs={12}>
            <Info
              title="Length"
              value={dive.length}
              unit="min"
              icon={<TimelapseRounded />}
            />
          </Grid>
        )}
        {dive.water && (
          <Grid xs={12}>
            <Info title="Water" value={dive.water} icon={<WavesRounded />} />
          </Grid>
        )}
        {dive.weights.taken && (
          <Grid xs={12}>
            <Info
              title="Weights"
              value={dive.weights.taken}
              unit="kg"
              icon={<ScaleRounded />}
            />
          </Grid>
        )}
      </Grid>
    </Sheet>
  </>
);

export default BasicInformation;
