import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";
import FormLabel from "@mui/joy/FormLabel";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Slider from "@mui/joy/Slider";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import type { FormFields } from "../types";
import generateSliderMarks from "../utils/generateSliderMarks";

const weightsAmmount = [
  {
    title: "Perfect 👌🏼",
    value: "perfect",
    helperText: "This ammount next time"
  },
  {
    title: "Too little 👇🏼",
    value: "tooLittle",
    helperText: "Take more weights next time"
  },
  {
    title: "Too much 👆🏼",
    value: "tooMuch",
    helperText: "Take less weights next time"
  }
];

const waterTypes = [
  {
    title: "Fresh",
    icon: "🍃",
    examples: "Quarries, lakes, rivers"
  },
  { title: "Salt", icon: "🧂", examples: "Seas, oceans" }
];

const sliderMarks = generateSliderMarks([0, 5, 10, 15, 20]);

const Details: React.FC = () => {
  const { setValue, getValues, control } = useFormContext<FormFields>();

  const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.value) {
      case "tooLittle":
        return setValue("weights.ammount", "tooLittle");
      case "tooMuch":
        return setValue("weights.ammount", "tooMuch");
      default:
        return setValue("weights.ammount", "perfect");
    }
  };

  return (
    <>
      <Controller
        name="water"
        control={control}
        render={({ field }) => (
          <RadioGroup
            {...field}
            row
            sx={{
              gap: 2,
              width: "100%"
            }}
          >
            {waterTypes.map((waterType) => (
              <FormControl
                sx={{ width: "100%", flexDirection: "row", gap: 2 }}
                key={waterType.title}
              >
                <Radio value={waterType.title} overlay size="lg" />

                <div>
                  <FormLabel>
                    {waterType.title} water {waterType.icon}
                  </FormLabel>
                  <FormHelperText>{waterType.examples}</FormHelperText>
                </div>
              </FormControl>
            ))}
          </RadioGroup>
        )}
      />

      <FormControl sx={{ mt: 4, px: 2 }}>
        <FormLabel>
          Weights ({getValues("units") === "metric" ? "kg" : "lbs"})
        </FormLabel>
        <Controller
          name="weights.taken"
          control={control}
          render={({ field }) => (
            <Slider
              {...field}
              size="lg"
              max={20}
              valueLabelDisplay="auto"
              marks={sliderMarks}
            />
          )}
        />
      </FormControl>

      <Controller
        name="weights.ammount"
        control={control}
        render={({ field }) => (
          <RadioGroup
            {...field}
            sx={{ mt: 4, gap: 2 }}
            onChange={(e) => onRadioChange(e)}
          >
            {weightsAmmount.map(
              (ammount: {
                title: string;
                value: string;
                helperText: string;
              }) => (
                <FormControl
                  key={ammount.value}
                  sx={{ width: "100%", flexDirection: "row", gap: 2 }}
                >
                  <Radio overlay size="lg" value={ammount.value} />
                  <div>
                    <FormLabel>{ammount.title}</FormLabel>
                    <FormHelperText>{ammount.helperText}</FormHelperText>
                  </div>
                </FormControl>
              )
            )}
          </RadioGroup>
        )}
      />
    </>
  );
};

export default Details;
