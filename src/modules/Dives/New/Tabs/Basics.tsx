import DownloadRounded from "@mui/icons-material/DownloadRounded";
import TimelapseRounded from "@mui/icons-material/TimelapseRounded";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Grid from "@mui/joy/Grid";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import TextField from "@mui/joy/TextField";
import getDiveEmoji from "common/utils/getDiveEmoji";
import React from "react";

import type { ComponentWithTextFieldsProps } from "../types";

interface BasicsProps extends ComponentWithTextFieldsProps {
  updateDiveProp: (prop: string, value: any) => void;
}

const Basics: React.FC<BasicsProps> = ({
  dive,
  handleTextFieldChange,
  updateDiveProp,
}) => {
  const handleDiveTypeSelectChange = (diveType: typeof dive.type) => {
    updateDiveProp("type", diveType);
  };

  return (
    <Grid container spacing={2}>
      <Grid xs={6}>
        <FormControl>
          <FormLabel>Dive type</FormLabel>
          <Select
            startDecorator={getDiveEmoji(dive.type)}
            value={dive.type}
            onChange={(value) => handleDiveTypeSelectChange(value!)}
          >
            {["Boat", "Shore"].map((diveType: string) => (
              <Option key={diveType} value={diveType.toLowerCase()}>
                {diveType}
              </Option>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid xs={6}>
        <TextField
          type="number"
          name="length"
          label="Length"
          endDecorator="min"
          startDecorator={<TimelapseRounded />}
          onChange={(e) => handleTextFieldChange(e, "length")}
          value={dive.length}
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
          value={dive.depthMax}
        />
      </Grid>
      <Grid xs={6}>
        <TextField
          type="number"
          name="averageDepth"
          label="Average depth"
          endDecorator="m"
          onChange={(e) => handleTextFieldChange(e, "depthAverage")}
          value={dive.depthAverage}
        />
      </Grid>
    </Grid>
  );
};

export default Basics;
