import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import MuiSlider from "@mui/joy/Slider";
import React, { ComponentProps } from "react";

import generateSliderMarks from "../generateSliderMarks";
import { SliderMark } from "../types";

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
      />
    </FormControl>
  );
};

export default TemperatureSlider;
