import DownloadRounded from "@mui/icons-material/DownloadRounded";
import TimelapseRounded from "@mui/icons-material/TimelapseRounded";
import Box from "@mui/joy/Box";
import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";
import FormLabel from "@mui/joy/FormLabel";
import Grid from "@mui/joy/Grid";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import Slider from "@mui/joy/Slider";
import TextField from "@mui/joy/TextField";
import getDiveEmoji from "common/utils/getDiveEmoji";
import React from "react";

import type {
  ComponentUpdatingDiveProps,
  ComponentWithTextFieldsProps,
} from "../types";

const Basics: React.FC<
  ComponentUpdatingDiveProps & ComponentWithTextFieldsProps
> = ({ dive, handleTextFieldChange, updateDiveProp }) => {
  const handleDiveTypeSelectChange = (diveType: typeof dive.type) => {
    updateDiveProp("type", diveType);
  };

  const handleDepthAverageSliderChange = (e: any) => {
    updateDiveProp("depthAverage", parseInt(e.target.value));
  };

  const handleDepthMaxSliderChange = (e: any) => {
    updateDiveProp("depthMax", parseInt(e.target.value));
  };

  return (
    <>
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
      </Grid>

      <Grid container mt={4} spacing={2}>
        <Grid xs={12}>
          <FormControl sx={{ px: 2 }}>
            <FormLabel>
              Average depth ({dive.units === "metric" ? "m" : "ft"})
            </FormLabel>
            <Slider
              size="lg"
              color="primary"
              max={120}
              valueLabelDisplay="auto"
              value={dive.depthAverage}
              onChange={(e) => handleDepthAverageSliderChange(e)}
            />
            <FormHelperText sx={{ alignSelf: "flex-end" }}>
              {dive.depthAverage}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <FormControl sx={{ px: 2 }}>
            <FormLabel>
              Max depth ({dive.units === "metric" ? "m" : "ft"})
            </FormLabel>
            <Slider
              size="lg"
              color="primary"
              max={120}
              valueLabelDisplay="auto"
              value={dive.depthMax}
              onChange={(e) => handleDepthMaxSliderChange(e)}
            />
            <FormHelperText sx={{ alignSelf: "flex-end" }}>
              {dive.depthMax}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default Basics;
