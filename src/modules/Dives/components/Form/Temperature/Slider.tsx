import Box from "@mui/joy/Box";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import MuiSlider from "@mui/joy/Slider";
import Typography from "@mui/joy/Typography";
import type { Dive } from "common/types";
import React, { type ComponentProps, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

import type { SliderMark } from "../types";
import generateSliderMarks from "../utils/generateSliderMarks";
import getSliderAriaValueText from "./getSliderAriaValueText";

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
  const { watch } = useFormContext<Dive>();

  const [sliderMarks, setSliderMarks] = useState<Array<SliderMark>>([]);
  useEffect(() => {
    setSliderMarks(generateSliderMarks(marks));
  }, [marks]);

  const watchUnits = watch("units");

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          justifyContent: "space-between"
        }}
      >
        <MuiSlider
          color={color}
          size="lg"
          min={min}
          max={max}
          marks={sliderMarks}
          valueLabelDisplay="auto"
          value={value}
          {...otherProps}
          getAriaLabel={() => `${label} temperature`}
          getAriaValueText={(value) =>
            getSliderAriaValueText(value, watchUnits)
          }
        />

        {value !== null && (
          <Typography fontSize="sm" sx={{ width: "10%" }}>
            {value}°{watchUnits === "metric" ? "C" : "F"}
          </Typography>
        )}
      </Box>
    </FormControl>
  );
};

export default TemperatureSlider;
