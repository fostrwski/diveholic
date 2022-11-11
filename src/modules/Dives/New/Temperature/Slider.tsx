import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import MuiSlider from "@mui/joy/Slider";
import React, { ComponentProps } from "react";

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
  const sliderMarks: Array<SliderMark> = generateSliderMarks(marks);

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiSlider
        color={color}
        size="lg"
        min={min}
        max={max}
        marks={sliderMarks}
        valueLabelDisplay="auto"
        {...props}
      />
    </FormControl>
  );
};

export default TemperatureSlider;
