import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";
import FormLabel from "@mui/joy/FormLabel";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Slider from "@mui/joy/Slider";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import type { FormFields } from "../../types";

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
            aria-label="Water type"
          >
            {waterTypes.map((waterType) => (
              <FormControl
                sx={{ width: "100%", flexDirection: "row", gap: 2 }}
                key={waterType.title}
              >
                <Radio
                  value={waterType.title}
                  componentsProps={{
                    input: { "aria-label": `${waterType.title} water` }
                  }}
                  overlay
                  size="lg"
                />

                <div>
                  <FormLabel>
                    {waterType.title} water {waterType.icon}
                  </FormLabel>
                  <FormHelperText
                    aria-label={`Examples of such water are: ${waterType.examples}`}
                  >
                    {waterType.examples}
                  </FormHelperText>
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
            aria-label="Weights ammount"
          >
            {weightsAmmount.map(
              (ammount: {
                title: string;
                icon: string;
                value: string;
                helperText: string;
              }) => (
                <FormControl
                  key={ammount.value}
                  sx={{ width: "100%", flexDirection: "row", gap: 2 }}
                >
                  <Radio
                    overlay
                    size="lg"
                    value={ammount.value}
                    componentsProps={{
                      input: { "aria-label": `${ammount.title}` }
                    }}
                  />
                  <div>
                    <FormLabel>
                      {ammount.title} {ammount.icon}
                    </FormLabel>
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
