import ScaleRounded from "@mui/icons-material/ScaleRounded";
import Box from "@mui/joy/Box";
import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";
import FormLabel from "@mui/joy/FormLabel";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Slider from "@mui/joy/Slider";
import type { DiveFlattened } from "common/types";
import React from "react";

import type { ComponentWithTextFieldsProps } from "../types";

interface DetailsProps extends ComponentWithTextFieldsProps {
  setDive: React.Dispatch<React.SetStateAction<DiveFlattened>>;
}

const Details: React.FC<DetailsProps> = ({
  dive,
  handleTextFieldChange,
  setDive,
}) => {
  const waterTypes = [
    { title: "Fresh", examples: "Quarries, lakes, rivers" },
    { title: "Salt", examples: "Seas, oceans" },
  ];

  const handleSetWater = (water: string) => {
    setDive((prevState: DiveFlattened) => ({
      ...prevState,
      water: water,
    }));
  };

  const handleWaterRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSetWater(e.target.value);
  };

  const sliderMarks = [
    { value: 0, label: "0" },
    { value: 5, label: "5" },
    { value: 10, label: "10" },
    { value: 15, label: "15" },
    { value: 20, label: "20" },
  ];

  return (
    <>
      <RadioGroup
        row
        sx={{
          gap: 2,
          width: "100%",
        }}
        value={dive.water}
      >
        {waterTypes.map((waterType: { title: string; examples: string }) => (
          <FormControl
            sx={{ width: "100%", flexDirection: "row", gap: 2 }}
            key={waterType.title}
          >
            <Radio
              overlay
              value={waterType.title}
              size="lg"
              onChange={(e) => handleWaterRadioChange(e)}
            />
            <div>
              <FormLabel>{waterType.title} water</FormLabel>
              <FormHelperText>{waterType.examples}</FormHelperText>
            </div>
          </FormControl>
        ))}
      </RadioGroup>

      <FormControl sx={{ mt: 4, px: 4 }}>
        <FormLabel>Weight</FormLabel>
        <Slider
          color="neutral"
          size="lg"
          aria-label="Weight picker"
          defaultValue={0}
          max={20}
          valueLabelDisplay="auto"
          marks={sliderMarks}
        />
      </FormControl>

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
