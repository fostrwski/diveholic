import DownloadRounded from "@mui/icons-material/DownloadRounded";
import TimelapseRounded from "@mui/icons-material/TimelapseRounded";
import Grid from "@mui/joy/Grid";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import type { Dive } from "common/types";
import React from "react";

import Info from "./Info";

interface BasicInformationProps {
  dive: Dive;
}

const BasicInformation: React.FC<BasicInformationProps> = ({ dive }) => {
  return (
    <>
      <Typography component="p" mb={2} level="subtitle1">
        Basic information
      </Typography>

      <Sheet
        variant="plain"
        sx={(theme) => ({
          borderLeftWidth: theme.spacing(0.4),
          borderLeftStyle: "solid",
          borderColor: "GrayText",
          borderTopLeftRadius: theme.vars.radius.xs,
          borderBottomLeftRadius: theme.vars.radius.xs,
        })}
      >
        <Grid container spacing={1}>
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
          {dive.depth.max && (
            <Grid xs={12}>
              <Info
                title="Max depth"
                value={dive.depth.max}
                unit="m"
                icon={<DownloadRounded />}
              />
            </Grid>
          )}
        </Grid>
      </Sheet>
    </>
  );
};

export default BasicInformation;
