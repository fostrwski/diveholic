import DownloadRounded from "@mui/icons-material/DownloadRounded";
import TimelapseRounded from "@mui/icons-material/TimelapseRounded";
import TitleRounded from "@mui/icons-material/TitleRounded";
import Grid from "@mui/joy/Grid";
import TextField from "@mui/joy/TextField";
import React from "react";

import type { ComponentWithTextFieldsProps } from "../types";

const Basics: React.FC<ComponentWithTextFieldsProps> = ({
  dive,
  handleTextFieldChange,
}) => {
  return (
    <Grid container spacing={2}>
      <Grid xs={6}>
        <TextField
          type="text"
          name="diveType"
          label="Dive type"
          startDecorator={<TitleRounded />}
          onChange={(e) => handleTextFieldChange(e, "type")}
        />
      </Grid>
      <Grid xs={6}>
        <TextField
          type="number"
          name="length"
          label="Length"
          endDecorator="min"
          startDecorator={<TimelapseRounded />}
          onChange={(e) => handleTextFieldChange(e, "length")}
        />
      </Grid>
      <Grid xs={6}>
        <TextField
          type="number"
          name="maxDepth"
          label="Max depth"
          endDecorator="m"
          startDecorator={<DownloadRounded />}
          onChange={(e) => handleTextFieldChange(e, "depthMax")}
        />
      </Grid>
      <Grid xs={6}>
        <TextField
          type="number"
          name="averageDepth"
          label="Average depth"
          endDecorator="m"
          onChange={(e) => handleTextFieldChange(e, "depthAverage")}
        />
      </Grid>
    </Grid>
  );
};

export default Basics;
