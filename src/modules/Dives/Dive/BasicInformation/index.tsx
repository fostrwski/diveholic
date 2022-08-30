import DownloadRounded from "@mui/icons-material/DownloadRounded";
import TimelapseRounded from "@mui/icons-material/TimelapseRounded";
import Box from "@mui/joy/Box";
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
    <Box mt={4}>
      <Typography component="p" mb={2} textColor="GrayText">
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
          {dive.maxDepth && (
            <Grid xs={12}>
              <Info
                title="Max depth"
                value={dive.maxDepth}
                unit="m"
                icon={<DownloadRounded />}
              />
            </Grid>
          )}
        </Grid>
      </Sheet>
    </Box>
  );
};

export default BasicInformation;
