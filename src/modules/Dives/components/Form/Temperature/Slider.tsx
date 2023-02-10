import Box from "@mui/joy/Box";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import MuiSlider from "@mui/joy/Slider";
import Typography from "@mui/joy/Typography";
import React, { type ComponentProps, useEffect, useState } from "react";

import type { SliderMark } from "../types";
import generateSliderMarks from "../utils/generateSliderMarks";

// Extends MuiSlider props but overrides 'marks' property
interface TemperatureSliderProps
  extends Omit<ComponentProps<typeof MuiSlider>, "marks"> {
  label: string;
  marks: Array<number>;
}

const TemperatureSlider: React.FC<TemperatureSliderProps> = ({
  label,
  min,
  max,
  color,
  marks,
  ...props
}) => {
  const { value, ...otherProps } = props;

  const [sliderMarks, setSliderMarks] = useState<Array<SliderMark>>([]);
  useEffect(() => {
    setSliderMarks(generateSliderMarks(marks));
  }, [marks]);

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <MuiSlider
          color={color}
          size="lg"
          min={min}
          max={max}
          marks={sliderMarks}
          valueLabelDisplay="auto"
          value={value}
          {...otherProps}
        />
        <Typography>{value}</Typography>
      </Box>
    </FormControl>
  );
};

export default TemperatureSlider;
