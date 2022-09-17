import ScaleRounded from "@mui/icons-material/ScaleRounded";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import TextField from "@mui/joy/TextField";
import React from "react";

import type { TabProps } from "./types";

const Details: React.FC<TabProps> = ({ dive, handleTextFieldChange }) => {
  return (
    <>
      <TextField
        type="text"
        name="water"
        label="Water"
        onChange={(e) => handleTextFieldChange(e, "water")}
      />
      <TextField
        type="number"
        name="weights"
        label="Weights"
        endDecorator="kg"
        startDecorator={<ScaleRounded />}
        onChange={(e) => handleTextFieldChange(e, "weightsTaken")}
        sx={{ mt: 2 }}
      />
      <RadioGroup
        defaultValue="perfect"
        name="radio-buttons-group"
        sx={{ mt: 4 }}
      >
        <Radio value="perfect" label="Perfect" />
        <Radio value="tooLittle" label="Too little" />
        <Radio value="tooMuch" label="Too much" />
      </RadioGroup>
    </>
  );
};

export default Details;
