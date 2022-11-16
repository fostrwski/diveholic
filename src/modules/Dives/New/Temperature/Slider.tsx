import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import MuiSlider from "@mui/joy/Slider";
import React, { ComponentProps, useEffect, useState } from "react";

import generateSliderMarks from "../utils/generateSliderMarks";
import type { SliderMark } from "../utils/types";

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
  const [sliderMarks, setSliderMarks] = useState<Array<SliderMark>>([]);
  useEffect(() => {
    setSliderMarks(generateSliderMarks(marks));
  }, []);

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
